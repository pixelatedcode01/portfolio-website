"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationItem({
  className,
  children,
  active,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  active: boolean;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={cn(
        "text-sm font-semibold text-cyan-800 rounded-full py-2 px-4 md:px-5 flex items-center justify-center select-none cursor-pointer hover:outline data-[active=true]:text-cyan-950 data-[active=true]:font-bold data-[active=true]:bg-white data-[active=true]:shadow-xl data-[active=true]:outline-none",
        className
      )}
      data-active={active}
    >
      {children}
    </Link>
  );
}

export default function NavigationBar() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Home",
      active: pathname == "/",
      link: "/",
    },
    {
      name: "Projects",
      active: pathname == "/projects",
      link: "/projects",
    },
    {
      name: "Contact",
      active: pathname == "/contact",
      link: "/contact",
    },
  ];
  return (
    <div className="fixed gap-1 flex items-center justify-center py-2 px-2 left-[50%] top-4 rounded-full translate-x-[-50%] shadow-cyan-700/20 bg-white/10 backdrop-blur-sm">
      {navItems.map((item, index) => (
        <NavigationItem key={index} active={item.active} link={item.link}>
          {item.name}
        </NavigationItem>
      ))}
    </div>
  );
}
