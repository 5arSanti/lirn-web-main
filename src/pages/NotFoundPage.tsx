import { Link } from "react-router-dom";
import { copy } from "../content/copy";

export function NotFoundPage() {
  return (
    <main className="page page-lirn">
      <h1>{copy.notFound}</h1>
      <p>
        <Link to="/">{copy.navLirn}</Link>
        {" · "}
        <Link to="/torns">{copy.navTorns}</Link>
      </p>
    </main>
  );
}
