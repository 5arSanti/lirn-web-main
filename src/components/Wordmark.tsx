import { useState } from "react";

const SRC: Record<"LIRN" | "TORNS", string> = {
  LIRN: `${import.meta.env.BASE_URL}lirn-wordmark.svg`,
  TORNS: `${import.meta.env.BASE_URL}torns-mark.png`,
};

export function Wordmark({ name }: { name: "LIRN" | "TORNS" }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <span className="wordmark-text">{name}</span>;

  return (
    <img
      className="wordmark-img"
      src={SRC[name]}
      alt={name}
      onError={() => setFailed(true)}
    />
  );
}
