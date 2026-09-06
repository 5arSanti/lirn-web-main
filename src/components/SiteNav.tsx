import { NavLink } from "react-router-dom";
import { copy } from "../content/copy";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Principal">
      <NavLink to="/" end>
        {copy.navLirn}
      </NavLink>
      <NavLink to="/torns">{copy.navTorns}</NavLink>
    </nav>
  );
}
