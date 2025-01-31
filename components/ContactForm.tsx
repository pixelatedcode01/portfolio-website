"use client";

import Button from "./ui/button";

export default function ContactForm() {
  return (
    <form action="#" className="flex flex-col gap-6 w-full">
      <div className="flex flex-row gap-6 flex-wrap">
        <div className="flex flex-col gap-3 w-full min-w-[200px]">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" className="w-full" />
        </div>
        <div className="flex flex-col gap-3 w-full min-w-[200px]">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full"
          rows={8}
          maxLength={200}
          required
          
        />
        <p className="self-end text-xs italic text-cyan-800 font-medium">
          max length: 200 characters.
        </p>
      </div>
      <div className="footer flex flex-row-reverse w-full">
        <Button className="w-full">Submit</Button>
      </div>
    </form>
  );
}
