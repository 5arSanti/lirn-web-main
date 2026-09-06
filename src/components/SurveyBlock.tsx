import { copy } from "../content/copy";
import { evidence } from "../content/evidence";

export function SurveyBlock() {
  return (
    <section className="band torns-validation" aria-labelledby="validation-title">
      <h2 id="validation-title" className="display">
        {copy.validationTitle}
      </h2>
      <p className="evidence-label">{evidence.label}</p>
      <ol className="survey-list">
        {evidence.questions.map((question) => (
          <li key={question.id} className="survey-item">
            <h3>{question.title}</h3>
            <p className="meta">{question.context}</p>
            <p className="prose">{question.analysis}</p>
            <ul className="survey-bars">
              {question.bars.map((bar) => (
                <li key={bar.label}>
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                  <div
                    className="survey-bar-fill"
                    style={{ width: `${bar.value}%` }}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="prose">{evidence.conclusions}</p>
    </section>
  );
}
