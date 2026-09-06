import { ByLirn } from "../components/ByLirn";
import { InfographicSlot } from "../components/InfographicSlot";
import { Wordmark } from "../components/Wordmark";
import { copy } from "../content/copy";

export function TornsPage() {
  return (
    <main className="page page-torns" data-theme="torns">
      <header className="torns-header">
        <div className="product-name">
          <Wordmark name="TORNS" />
          <ByLirn />
        </div>
        <p>{copy.tornsOficio}</p>
      </header>

      <section className="torns-section">
        <p className="kicker">{copy.problemLabel}</p>
        <h1>{copy.whyTitle}</h1>
        <p>{copy.whyBody}</p>
        <p className="foot">{copy.whyFoot}</p>
      </section>

      <section className="torns-section">
        <p className="kicker">{copy.solutionLabel}</p>
        <h2>{copy.solutionTitle}</h2>
        <p>{copy.solutionBody}</p>
        <ul>
          <li>{copy.factOccupation}</li>
          <li>{copy.factCamera}</li>
          <li>{copy.factRecommend}</li>
        </ul>
      </section>

      <InfographicSlot />
      <p className="limit">{copy.limit}</p>
      <p className="close">{copy.close}</p>
    </main>
  );
}
