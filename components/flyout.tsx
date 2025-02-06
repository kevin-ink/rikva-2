export default function Flyout({ height }: { height: number }) {
  return (
    <div
      style={{ height: `${height}px` }}
      className={`transition-all duration-200 w-full`}
    ></div>
  );
}
