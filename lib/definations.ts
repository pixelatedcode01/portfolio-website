import { z } from "zod";

export const ContactFormSchema = z.object({
    id: z.string().optional(),
    fname: z.string().trim().min(3, { message: "First name must at atleast 3 characters long" }),
    lname: z.string().trim().optional(),
    email: z.string().toLowerCase().email({ message: 'Please enter valid email address' }),
    message: z.string().toLowerCase().min(1, { message: 'Message must be atleast 1 character long' }).max(200, { message: 'Please enter valid email address' })
})