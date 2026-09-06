import { ByLirn } from "../components/ByLirn";
import { InfographicSlot } from "../components/InfographicSlot";
import { NetworkDiagram } from "../components/NetworkDiagram";
import { copy } from "../content/copy";

export function TornsPage() {
  return (
    <main className="stage stage-torns" data-theme="torns">
      <div className="stage-field stage-field-dense" aria-hidden="true">
        <NetworkDiagram activeNode="d" />
      </div>

      <div className="stage-viewport">
        <header className="stage-hero stage-hero-product">
          <div className="product-name product-name-hero">
            <span className="product-mark">{copy.tornsName}</span>
            <ByLirn />
          </div>
          <p className="stage-oficio">{copy.tornsOficio}</p>
        </header>

        <div className="stage-rail stage-rail-stack">
          <section className="module">
            <h1>{copy.whyTitle}</h1>
            <p>{copy.whyBody}</p>
            <p className="module-foot">{copy.whyFoot}</p>
          </section>

          <section className="module module-product">
            <h2>{copy.solutionTitle}</h2>
            <p>{copy.solutionBody}</p>
            <ul className="fact-list">
              <li>{copy.factOccupation}</li>
              <li>{copy.factCamera}</li>
              <li>{copy.factRecommend}</li>
            </ul>
          </section>
        </div>
      </div>

      <InfographicSlot />

      <footer className="stage-footer">
        <p className="limit">{copy.limit}</p>
        <p className="close">{copy.close}</p>
      </footer>
    </main>
  );
}
