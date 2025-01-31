import ContactForm from "@/components/ContactForm";
import { Playwrite_US_Trad } from "next/font/google";

const playwrite = Playwrite_US_Trad();

export default function Contact() {
  return (
    <>
      <p
        className={`text-4xl md:text-6xl ${playwrite.className} my-8 text-cyan-950`}
      >
        Contact Me{" "}
      </p>
      <p className="py-2 pr-2 -mt-6 underline decoration-wavy decoration-cyan-300 text-nowrap truncate decoration-3 text-transparent text-xl text-center select-none pointer-events-none">
        This is for the underline working
      </p>
      <div className="projects-container">
        <ContactForm />
      </div>
    </>
  );
}
