import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white relative p-5 shadow-[0_1px_1px_0_rgba(0,0,0,0.2)] rounded-md flex items-center hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.25)] justify-center transition-shadow duration-150",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
