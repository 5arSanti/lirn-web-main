import { Link } from "react-router-dom";
import { ByLirn } from "../components/ByLirn";
import { Wordmark } from "../components/Wordmark";
import { copy } from "../content/copy";

export function HomePage() {
  return (
    <main className="page page-lirn" data-theme="lirn">
      <header className="block-firma">
        <Wordmark name="LIRN" />
        <p>{copy.oficio}</p>
      </header>

      <section className="block-mv">
        <h1>Misión</h1>
        <p>{copy.mission}</p>
        <h2>Visión</h2>
        <p>{copy.vision}</p>
      </section>

      <section className="block-product">
        <div className="product-name">
          <Wordmark name="TORNS" />
          <ByLirn />
        </div>
        <p>{copy.productWhat}</p>
        <Link to="/torns">{copy.navTorns}</Link>
      </section>

      <section className="block-why">
        <h2>{copy.whyTitle}</h2>
        <p>{copy.whyBody}</p>
        <p className="foot">{copy.whyFoot}</p>
      </section>

      <footer className="block-close">
        <Wordmark name="LIRN" />
      </footer>
    </main>
  );
}
