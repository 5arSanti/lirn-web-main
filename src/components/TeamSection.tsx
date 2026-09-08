import { copy } from "../content/copy";
import { Reveal } from "./Reveal";

export function TeamSection() {
  return (
    <section
      id="empresa"
      className="band torns-team torns-on-white"
      aria-labelledby="team-title"
    >
      <Reveal className="torns-section-head">
        <div>
          <h2 id="team-title" className="display">
            {copy.companyTitle}
          </h2>
          <p className="lede">{copy.companyBody}</p>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <ul className="torns-team-list">
          {copy.teamMembers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
