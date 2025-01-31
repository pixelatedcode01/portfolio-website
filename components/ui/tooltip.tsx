export default function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute bg-neutral-900 text-white px-2 py-1 rounded-md shadow-lg bottom-[100%] mb-2 z-10">
      <span className="text-xs tracking-[0.1pt]">{text}</span>
    </div>
  );
}
