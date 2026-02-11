import axios from "axios";

export async function submitSuggestion(summary: string, description: string) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/api/jira`,
      { summary, description }, // request body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Axios automatically parses JSON
  } catch (error: any) {
    if (error.response) {
      // Backend returned an error response
      throw new Error(`Backend error: ${error.response.status} - ${error.response.data}`);
    } else {
      // Network or other error
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}
