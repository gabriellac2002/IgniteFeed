export function Avatar({
  src,
  hasBorder,
}: {
  src: string;
  hasBorder?: boolean;
}) {
  return (
    <img
      src={src}
      className={`rounded-lg border-4 border-gray-800 ${
        hasBorder ? "outline outline-2 outline-green-500" : ""
      }`}
      style={{ height: `calc(3rem + 8px)`, width: `calc(3rem + 8px)` }}
    />
  );
}
