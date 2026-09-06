export function GeometryFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={["geometry-frame", className].filter(Boolean).join(" ")}>{children}</div>;
}
