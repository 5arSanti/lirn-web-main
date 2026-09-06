import { Link } from "react-router-dom";
import { copy } from "../content/copy";

export function NotFoundPage() {
  return (
    <main className="page stage-404">
      <h1>{copy.notFound}</h1>
      <p>
        <Link to="/">{copy.navLirn}</Link>
        <span aria-hidden="true"> · </span>
        <Link to="/torns">{copy.navTorns}</Link>
      </p>
    </main>
  );
}
