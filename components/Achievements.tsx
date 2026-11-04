import { ACHIEVEMENTS } from "../data/portfolio";

export default function Achievements() {
  return (
    <section className="section">
      <h2 className="h2 h2-spaced">Achievements</h2>
      <div className="achievements">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="achievement">
            <span className="muted-14">{a.meta}</span>
            <span className="achievement-title">{a.title}</span>
            <span className="muted-14">{a.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
