import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "px-5 py-3 bg-cyan-900 text-cyan-50 rounded-full text-sm cursor-pointer font-medium text-nowrap hover:shadow-md transition-bg duration-200 hover:bg-cyan-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
