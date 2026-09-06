import { GeometryFrame } from "./GeometryFrame";

export function StationPhoto({
  file,
  className,
}: {
  file: string;
  className?: string;
}) {
  return (
    <GeometryFrame className={className}>
      <img
        src={`${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`}
        alt=""
        width={1920}
        height={1080}
      />
    </GeometryFrame>
  );
}
