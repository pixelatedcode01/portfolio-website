import { z } from "zod";

export const ContactFormSchema = z.object({
    fname: z.string().trim().min(3, { message: "Name must at atleast 3 characters long" }),
    lname: z.string().trim().optional(),
    email: z.string().toLowerCase().email({ message: 'Please enter valid email address' }),
    message: z.string().toLowerCase().max(200, { message: 'Please enter valid email address' })
})