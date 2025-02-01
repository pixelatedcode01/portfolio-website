"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ContactFormSchema } from "@/lib/definations";
import Button from "./ui/button";
import { z } from "zod";
import { contactForm } from "@/actions/actions";
import toast from "react-hot-toast";
// import { contactForm } from "@/actions/actions";

export default function ContactForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, action, isPending] = useActionState(contactForm, {
    message: "",
    success: undefined,
  });
  const formRef = useRef(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [defaultValues, setDefaultValues] = useState<
    z.infer<typeof ContactFormSchema>
  >({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const contactAction = async (formData: FormData) => {
    const contact = {
      fname: formData.get("fname"),
      lname: formData.get("lname"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = ContactFormSchema.safeParse(contact);
    if (!result.success) {
      setDefaultValues((prevValues) => ({
        ...prevValues,
        fname: contact.fname as string,
        lname: contact.lname as string,
        email: contact.email as string,
        message: contact.message as string,
      }));
      const newErrors: Record<string, string | null> = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setDefaultValues({
      fname: "",
      lname: "",
      email: "",
      message: "",
    });
    action(result.data);
  };
  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.success === false) {
      toast.error(state.message);
    }
  }, [state]);
  // function handleSubmit(evt: FormEvent<HTMLFormElement>) {
  //   evt.preventDefault();
  //   const formData = new FormData(formRef.current!);
  //   const contact = {
  //     fname: formData.get("fname"),
  //     lname: formData.get("lname"),
  //     email: formData.get("email"),
  //     message: formData.get("message"),
  //   };
  //   const result = ContactFormSchema.safeParse(contact);
  //   if (!result.success) {
  //     setDefaultValues((prevValues) => ({
  //       ...prevValues,
  //       fname: contact.fname as string,
  //       lname: contact.lname as string,
  //       email: contact.email as string,
  //       message: contact.message as string,
  //     }));
  //     const newErrors: Record<string, string | null> = {};
  //     result.error.issues.forEach((issue) => {
  //       newErrors[issue.path[0] as string] = issue.message;
  //     });
  //     setErrors(newErrors);
  //     // return;
  //   }
  //   setErrors({});
  //   setDefaultValues({
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     message: "",
  //   });
  //   startTransition(() => {
  //     action();
  //   });
  // }
  return (
    <form
      action={contactAction}
      // onSubmit={(evt) => handleSubmit(evt)}
      ref={formRef}
      className="flex flex-col gap-6 w-full"
    >
      <div className="flex flex-row gap-6 flex-wrap">
        {/* First Name */}
        <div className="flex flex-col gap-2 w-full min-w-[200px]">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            disabled={isPending}
            defaultValue={defaultValues.fname || state?.fields?.fname || ""}
            className={`w-full border px-2 py-1 ${
              errors.fname ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fname && (
            <p className="text-red-500 text-sm">{errors.fname}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2 w-full min-w-[200px]">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            disabled={isPending}
            defaultValue={defaultValues.lname || state?.fields?.lname || ""}
            className={`w-full border px-2 py-1 ${
              errors.lname ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.lname && (
            <p className="text-red-500 text-sm">{errors.lname}</p>
          )}
        </div>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          disabled={isPending}
          defaultValue={defaultValues.email || state?.fields?.email || ""}
          className={`w-full border px-2 py-1 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          disabled={isPending}
          className={`w-full border px-2 py-1 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          rows={8}
          maxLength={200}
          defaultValue={defaultValues.message || state?.fields?.message || ""}
        />
        <p className="self-end text-xs italic text-cyan-800 font-medium">
          max length: 200 characters.
        </p>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="footer flex flex-row-reverse w-full">
        <Button className="w-full" disabled={isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}
