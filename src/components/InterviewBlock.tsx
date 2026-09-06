import { copy } from "../content/copy";
import { evidence } from "../content/evidence";

export function InterviewBlock() {
  return (
    <section className="band torns-discovery torns-on-white" aria-labelledby="discovery-title">
      <h2 id="discovery-title" className="display">
        {copy.discoveryTitle}
      </h2>
      <p className="evidence-label">{evidence.label}</p>
      <p className="lede">{evidence.interviewRole}</p>
      <ol className="interview-list">
        {evidence.turns.map((turn) => (
          <li key={turn.question}>
            <p className="interview-q">{turn.question}</p>
            <p className="interview-a">{turn.answer}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
