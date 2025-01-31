interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <div className="outline outline-cyan-950 text-cyan-950 w-fit rounded-sm px-2 py-1 flex items-center select-none hover:bg-cyan-900 hover:text-cyan-50">
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
