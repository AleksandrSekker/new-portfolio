import { z } from "zod";

export const schema = z.object({
  name: z.string().optional().optional(),
  phone: z.string().optional(),
  email: z.string().nonempty().email(),
  subject: z.string().optional(),
  message: z.string().min(8),
});
