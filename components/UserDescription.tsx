"use client";

import { useState } from "react";

export default function UserDescription() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p
        className={`text-lg tracking-[0.1pt] text-cyan-900 line-clamp-3 md:line-clamp-none ${
          isOpen ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        I am a passionate web developer and transforming ideas into impactful
        solutions for brand excellence. An approachable and friendly person who
        is an enthusiastic learner, picks things up quickly, thrives under
        pressure, adaptable in adverse conditions and able to hit the ground
        running. Currently seeking a position that will benefit from my passion
        and drive to perform to an exceptionally high standard. An opportunity
        where I can apply my technical proficiency and create scalable, creative
        solutions, while continuously refining my coding prowess in a
        collaborative and growth-oriented organization.
      </p>
      <p
        className="underline underline-offset-2 cursor-pointer select-none text-cyan-900 hover:bg-cyan-200 w-fit font-medium
        md:opacity-0 md:hidden
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        Read {isOpen ? 'less' : "more"}
      </p>
    </>
  );
}
