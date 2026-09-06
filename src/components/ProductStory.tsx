import { useState } from "react";
import { copy } from "../content/copy";

const ACTS = [
  {
    id: "occupation",
    label: "01 Ocupación",
    body: copy.storyOccupation,
  },
  {
    id: "camera",
    label: "02 Cámara",
    body: copy.storyCamera,
  },
  {
    id: "recommend",
    label: "03 Recomendación",
    body: copy.storyRecommend,
  },
] as const;

type ActId = (typeof ACTS)[number]["id"];

function SyntheticPanel({ act }: { act: ActId }) {
  switch (act) {
    case "occupation":
      return (
        <div className="product-story-visual occupation-panel" aria-hidden="true">
          <span className="occupation-value">72%</span>
          <span className="occupation-track">
            <span />
          </span>
          <span>Ocupación estimada</span>
        </div>
      );
    case "camera":
      return (
        <div className="product-story-visual camera-panel" aria-hidden="true">
          <span className="camera-corner camera-corner-top" />
          <span className="camera-person">Persona 018</span>
          <span className="camera-count">38 personas detectadas</span>
        </div>
      );
    case "recommend":
      return (
        <div className="product-story-visual recommend-panel" aria-hidden="true">
          <span>Próximo despacho</span>
          <strong>+1 vehículo</strong>
          <span>Frecuencia sugerida · 4 min</span>
        </div>
      );
  }
}

export function ProductStory() {
  const [active, setActive] = useState(0);
  const act = ACTS[active];

  return (
    <section
      id="producto-vivo"
      className="product-story"
      data-theme="torns"
      aria-labelledby="product-story-title"
    >
      <div className="product-story-heading">
        <h2 id="product-story-title">{copy.storyTitle}</h2>
        <p className="synthetic-note">{copy.syntheticNote}</p>
      </div>

      <div className="product-story-steps" role="tablist" aria-label="Actos del producto">
        {ACTS.map((item, index) => (
          <button
            key={item.id}
            id={`product-story-tab-${item.id}`}
            type="button"
            role="tab"
            aria-controls={`product-story-panel-${item.id}`}
            aria-selected={index === active}
            aria-current={index === active ? "step" : undefined}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        id={`product-story-panel-${act.id}`}
        className={`product-story-panel is-${act.id}`}
        role="tabpanel"
        aria-labelledby={`product-story-tab-${act.id}`}
      >
        <p>{act.body}</p>
        <SyntheticPanel act={act.id} />
        <small>Interfaz sintética</small>
      </div>
    </section>
  );
}
