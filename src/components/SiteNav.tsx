import { Link, useLocation } from "react-router-dom";
import { copy } from "../content/copy";
import { BrandMark } from "./BrandMark";

export function SiteNav() {
  const torns = useLocation().pathname.includes("torns");

  return (
    <nav className="site-nav" aria-label="Principal">
      <Link to="/" className="site-nav-brand" aria-label="LIRN">
        <BrandMark variant="wordmark" on={torns ? "dark" : "light"} />
      </Link>
      <div className="site-nav-links">
        <Link to="/#empresa">{copy.navEmpresa}</Link>
        <Link to="/torns">{copy.navTorns}</Link>
        <Link to="/torns#contacto">{copy.navContacto}</Link>
        <Link className="site-nav-cta" to="/torns#contacto">
          {copy.ctaTalk}
        </Link>
      </div>
    </nav>
  );
}
