import { useState } from "react";
import { JOBS } from "../data/portfolio";

export default function Work() {
  // First job open by default
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <section id="work" className="split">
      <div className="split-aside">
        <h2 className="h2">Where I’ve worked.</h2>
        <p className="aside-lead">
          Four years in Web3, contracts first, then SDKs, docs and the people using them.
        </p>
      </div>
      <div className="split-list">
        {JOBS.map((job, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={job.company} className="card">
              <button
                type="button"
                className="card-toggle"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <div className="card-head">
                  <span className="card-title">{job.role}</span>
                  <span className="card-meta">{job.company}</span>
                </div>
                <span className="card-dates">{job.dates}</span>
                <span className="card-sign">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <ul className="points">
                  {job.points.map((pt) => (
                    <li key={pt} className="point">
                      <span className="point-dot" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
