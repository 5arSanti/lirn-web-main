import { Link } from "react-router-dom";
import { copy } from "../content/copy";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandMark variant="icon" on="dark" />
      <strong>{copy.lirnName}</strong>
      <p>{copy.footerBlurb}</p>
      <Link to="/torns">{copy.verTorns}</Link>
    </footer>
  );
}
