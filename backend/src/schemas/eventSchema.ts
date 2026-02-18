import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  eventDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format, expected ISO string",
  }),
  createdBy: z.number().min(4, "CreatedBy must be at least 4 digits long"),
  category: z
    .enum(["church", "ministeral", "national"])
    .refine((val) => ["church", "ministeral", "national"].includes(val), {
      message: "Category must be either 'church', 'ministeral', or 'national'",
    }),
});

// Infer TypeScript type
export type EventInput = z.infer<typeof eventSchema>;
