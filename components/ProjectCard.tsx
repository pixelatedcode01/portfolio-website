"use client";

import { useState } from "react";
import { ProjectProps } from "@/data/skills";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Badge from "./ui/badge";

function LinkButton({
  link,
  children,
  label,
}: {
  link: string;
  children: React.ReactNode;
  label: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Link
      href={link}
      className={`p-2 hover:bg-neutral-950 rounded-full group flex items-center justify-center cursor-pointer h-10 gap-1 bg-neutral-100`}
      onMouseOver={() => setIsExpanded(true)}
      onMouseOut={() => setIsExpanded(false)}
      style={{
        width: isExpanded ? "100px" : "40px",
        transition: "width 300ms cubic-bezier(0.05, 0.7, 0.1, 1.0)",
      }}
    >
      {children}
      {isExpanded ? (
        <span className="text-sm font-medium text-white">{label}</span>
      ) : null}
    </Link>
  );
}

export function ProjectCard({ item }: { item: ProjectProps }) {
  return (
    <div className="project flex flex-col bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.2)] rounded-xl hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.25)] h-fit">
      <div className="header-image h-[150px] rounded-xl">
        <Image
          src={item.banner || "/javascript.svg"}
          alt=""
          className="size-full object-cover rounded-xl"
          width={400}
          height={200}
        />
      </div>
      <div className="tags p-4 pb-0 flex gap-3 flex-wrap">
        {item.stack.map((item, index) => (
          <Badge key={index} label={item} />
        ))}
      </div>
      <div className="body p-3 flex flex-col gap-1">
        <p className="text-xl font-semibold">{item.projectTitle}</p>
        <p className="description text-sm text-neutral-700 line-clamp-2 md:line-clamp-none">
          {item.projectDescription}
        </p>
      </div>
      <div className="footer flex gap-3 pt-0 p-4 flex-row-reverse">
        <LinkButton link={item.github} label="GitHub">
          <Github className="group-hover:stroke-white mt-[1px]" />
        </LinkButton>
        {item.website ? (
          <LinkButton link={item.github} label="Website">
            <Globe className="group-hover:stroke-white" />
          </LinkButton>
        ) : null}
      </div>
    </div>
  );
}
