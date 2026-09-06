import { Link } from "react-router-dom";
import { copy } from "../content/copy";

export function NotFoundPage() {
  return (
    <main className="stage stage-lirn stage-404">
      <header className="stage-hero">
        <h1>{copy.notFound}</h1>
        <p className="stage-oficio">
          <Link to="/">{copy.navLirn}</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/torns">{copy.navTorns}</Link>
        </p>
      </header>
    </main>
  );
}
