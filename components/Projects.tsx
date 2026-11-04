import { useState } from "react";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  // First project open by default
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <section id="projects" className="split">
      <div className="split-aside">
        <h2 className="h2">Things I’ve built.</h2>
        <p className="aside-lead">Mostly hackathons, all on-chain.</p>
      </div>
      <div className="split-list">
        {PROJECTS.map((p, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={p.name} className="card">
              <button
                type="button"
                className="card-toggle"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <div className="card-head">
                  <span className="card-title">{p.name}</span>
                  <span className="card-meta">{p.short}</span>
                </div>
                {p.badge && <span className="badge-blue">{p.badge}</span>}
                <span className="card-sign">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="project-body">
                  <p className="project-desc">{p.desc}</p>
                  {p.note && <span className="tag tag-note">{p.note}</span>}
                  <div className="tags">
                    {p.stack.split(" · ").map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-sm-dark">
                        Visit ↗
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="btn-sm-light">
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
