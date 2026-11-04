import { useEffect, useState } from "react";
import { EMAIL, SOCIALS } from "../data/portfolio";

const SHOW_CLOCK = true;

function useIstTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const t = setInterval(tick, 15000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export default function Intro() {
  const time = useIstTime();

  return (
    <section className="intro">
      <div className="intro-chip">
        <span className="intro-chip-logo">T</span>
        <span style={{ whiteSpace: "nowrap" }}>Solutions Engineer at Tatum</span>
        {SHOW_CLOCK && (
          <span style={{ flex: "none", whiteSpace: "nowrap", color: "#707070" }}>
            · {time} IST
          </span>
        )}
      </div>
      <h1 className="intro-title">Mohit Thakkar.</h1>
      <p className="intro-lead">
        <span className="intro-lead-inner">
          Most of my work happens between a developer’s first question and demos, proofs of
          concept, SDKs and the docs that go with them.
        </span>
      </p>
      <p className="intro-sub">
        Before Tatum I did developer relations at Timeswap Labs and Dotnames. I still build at
        hackathons when I can.
      </p>
      <div className="intro-actions">
        <a href={`mailto:${EMAIL}`} className="btn-dark">Email me</a>
        <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
        <a href={SOCIALS.x} target="_blank" rel="noreferrer" className="btn-outline">X ↗</a>
      </div>
    </section>
  );
}
