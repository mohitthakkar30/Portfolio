import { EMAIL, SOCIALS } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <h2 className="footer-title">Let’s connect.</h2>
        <p className="footer-lead">Building something, or just want to talk? My inbox is open.</p>
        <div className="footer-actions">
          <a href={`mailto:${EMAIL}`} className="btn-light">{EMAIL}</a>
        </div>
        <div className="footer-links">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href={SOCIALS.x} target="_blank" rel="noreferrer" className="footer-link">X</a>
          <a href={SOCIALS.medium} target="_blank" rel="noreferrer" className="footer-link">Medium</a>
          <span className="footer-copy">© 2026 Mohit Thakkar</span>
        </div>
      </div>
    </footer>
  );
}
