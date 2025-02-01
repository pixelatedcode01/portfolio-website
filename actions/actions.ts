"use server";

import { EmailTemplate } from "@/components/email-template";
import { ContactFormSchema } from "@/lib/definations";
import { Resend } from "resend";
import { z } from "zod";

interface FormState {
    message: string
    success: boolean | undefined
    fields?: Record<string, string | null>
    issues?: object[]
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactForm(prevState: FormState, newForm: z.infer<typeof ContactFormSchema>): Promise<FormState> {
    const parsed = ContactFormSchema.safeParse(newForm);
    if (!parsed.success) {
        const fields: Record<string, string | null> = {};
        for (const key of Object.keys(newForm) as Array<keyof typeof newForm>) {
            fields[key as string] = newForm[key] as string | null;
        }
        return {
            message: 'Error submitting form',
            success: false,
            fields: fields,
            issues: parsed.error.issues.map((issue) => issue)
        }
    }

    try {
        const { error } = await resend.emails.send({
            from: `Contact <${process.env.DOMAIN}>`,
            to: ['namanrastogi.materiox@gmail.com'],
            subject: `Message from ${parsed.data.fname} ${parsed.data.lname || ''}`,
            react: EmailTemplate({
                firstName: parsed.data.fname,
                lastName: parsed.data?.lname,
                email: parsed.data.email,
                message: parsed.data.message
            }) as React.ReactElement,
        });

        if (error) {
            return {
                message: error.message,
                success: false
            }
        }

        return {
            message: 'Message sent successfully!',
            success: true
        }
    } catch (error) {
        return {
            message: String(error),
            success: false
        }
    }
}