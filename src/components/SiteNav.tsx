import { Link } from "react-router-dom";
import { copy } from "../content/copy";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Principal">
      <Link to="/" className="site-nav-brand">
        {copy.navLirn}
      </Link>
      <div className="site-nav-links">
        <Link to={{ pathname: "/", hash: "empresa" }}>{copy.navEmpresa}</Link>
        <Link to="/torns">{copy.navTorns}</Link>
        <Link
          className="site-nav-cta"
          to={{ pathname: "/", hash: "contacto" }}
        >
          {copy.ctaTalk}
        </Link>
      </div>
    </nav>
  );
}
