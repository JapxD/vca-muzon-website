import { Router } from "express";
import type { Request, Response } from "express";
import axios from "axios";

const router = Router();

// POST /suggestions
router.post("/", async (req: Request, res: Response) => {
  try {
    const { summary, description } = req.body;

    if (!summary || !description) {
      return res
        .status(400)
        .json({ error: "Summary and description are required" });
    }
    const jiraDomain = process.env.JIRA_BASE_URL; // e.g. https://your-domain.atlassian.net
    const projectKey = process.env.JIRA_PROJECT_KEY;
    const email = process.env.JIRA_EMAIL;
    const apiToken = process.env.JIRA_API_TOKEN;
    const auth = Buffer.from(`${email}:${apiToken}`).toString("base64"); // Example payload: you can map req.body into summary/description
    const payload = {
      fields: {
        project: { key: projectKey },
        summary: req.body.summary || "Default suggestion title",
        description: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: `Description: ${description}` }],
            },
          ],
        },
        issuetype: { name: "Story" },
      },
    };
    // Send to Jira
    const response = await axios.post(`${jiraDomain}/issue`, payload, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    res.status(201).json({
      message: "Suggestion submitted to Jira successfully",
      issueKey: response.data.key,
    });
  } catch (error: any) {
    console.error("Error creating Jira issue:", error.message);
    res
      .status(500)
      .json({ error: "Failed to submit suggestion to Jira:" + error.message });
  }
});

export default router;
