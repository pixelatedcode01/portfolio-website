import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-5 py-3 bg-cyan-900 text-cyan-50 rounded-full text-sm cursor-pointer font-medium text-nowrap select-none hover:shadow-md transition-bg duration-200 hover:bg-cyan-700 disabled:bg-neutral-300 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none disabled:text-neutral-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
