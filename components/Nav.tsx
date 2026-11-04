import { EMAIL } from "../data/portfolio";

export default function Nav() {
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-logo">MT</span>
          <span style={{ whiteSpace: "nowrap" }}>Mohit Thakkar</span>
        </a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href={`mailto:${EMAIL}`} className="nav-cta">Get in touch</a>
      </nav>
    </div>
  );
}
