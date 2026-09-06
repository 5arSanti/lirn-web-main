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
  className,
  decorative = false,
}: {
  variant: "wordmark" | "icon";
  on: "dark" | "light";
  className?: string;
  decorative?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}logos/${encodeURIComponent(FILES[variant][on])}`;
  const markClass = ["brand-mark", `brand-mark-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (failed) {
    return (
      <span className={["brand-mark-fallback", className].filter(Boolean).join(" ")}>
        LIRN
      </span>
    );
  }

  return (
    <img
      className={markClass}
      src={src}
      alt={decorative ? "" : "LIRN"}
      onError={() => setFailed(true)}
    />
  );
}
