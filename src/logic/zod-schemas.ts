import { z } from "zod";

export const privateUserDataSchema = z.object({
  creditLeftCents: z.number().min(0),
  numYoutubeVideoUploadLeft: z.number().min(0),
});