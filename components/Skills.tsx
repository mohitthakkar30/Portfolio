import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section">
      <h2 className="h2 h2-spaced">Skills</h2>
      <div className="skills">
        {SKILLS.map((row) => (
          <div key={row.label} className="skill-row">
            <span className="skill-label">{row.label}</span>
            {row.items.map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
