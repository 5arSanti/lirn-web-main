import { useState } from "react";

const FILES = {
  wordmark: {
    dark: "LIRN-v1 - black.jfif",
    light: "LIRN-v1 - white.jfif",
  },
  icon: {
    dark: "LIRN-v2 - black.jfif",
    light: "LIRN-v2 - white.jfif",
  },
} as const;

export function BrandMark({
  variant,
  on,
}: {
  variant: "wordmark" | "icon";
  on: "dark" | "light";
}) {
  const [failed, setFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}logos/${encodeURIComponent(FILES[variant][on])}`;

  if (failed) return <span className="brand-mark-fallback">LIRN</span>;

  return (
    <img
      className={`brand-mark brand-mark-${variant}`}
      src={src}
      alt="LIRN"
      onError={() => setFailed(true)}
    />
  );
}
