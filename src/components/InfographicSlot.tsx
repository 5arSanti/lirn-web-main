import { useState } from "react";
import { copy } from "../content/copy";
import { tornsLandingUrl } from "../content/site";

export function InfographicSlot() {
  const [failed, setFailed] = useState(false);

  if (tornsLandingUrl === null || failed) return null;

  return (
    <figure className="infographic">
      <img
        src={`${import.meta.env.BASE_URL}torns-infographic.png`}
        alt={copy.qrLegend}
        onError={() => setFailed(true)}
      />
    </figure>
  );
}
