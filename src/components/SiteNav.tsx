import { NavLink } from "react-router-dom";
import { copy } from "../content/copy";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Principal">
      <NavLink to="/" end className="site-nav-brand">
        {copy.navLirn}
      </NavLink>
      <div className="site-nav-links">
        <NavLink to="/" end>
          {copy.navLirn}
        </NavLink>
        <NavLink to="/torns">{copy.navTorns}</NavLink>
      </div>
    </nav>
  );
}
