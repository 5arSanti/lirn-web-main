import { Link, useLocation } from "react-router-dom";
import { copy } from "../content/copy";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  const torns = useLocation().pathname.includes("torns");

  return (
    <footer className="site-footer">
      <BrandMark variant="icon" on="dark" decorative />
      <strong>{copy.lirnName}</strong>
      <p>{copy.footerBlurb}</p>
      <Link to={torns ? "/torns#contacto" : "/torns"}>
        {torns ? copy.ctaTalk : copy.verTorns}
      </Link>
    </footer>
  );
}
