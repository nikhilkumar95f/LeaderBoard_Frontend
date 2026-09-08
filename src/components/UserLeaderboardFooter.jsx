import { useState } from "react";

const foundingMembers = [
  { name: "Aarav Kumar", role: "President", image: "/members/aarav.jpeg", link: "https://www.linkedin.com/in/aarav12e/" },
  { name: "Aakash Mandal", role: "Vice President", image: "/members/aakash.jpeg", link: "https://www.linkedin.com/in/aakash-mandal-012444372/" },
  { name: "Archana Kumari", role: "Secretary", image: "/members/archana.jpeg", link: "https://www.linkedin.com/in/archana-kumari-601306328/" },
  { name: "Kajal", role: "Media Head", image: "/members/kajal.jpeg", link: "https://www.linkedin.com/in/kajal-singh-59a20b362/" },
  { name: "Ishant Raj", role: "Technical Head", image: "/members/ishant.jpeg", link: "https://www.linkedin.com/in/ishant-raj-b82901219/" },
  { name: "Sudanshu Kumar ", role: "Cybersecurity Lead", image: "/members/sudhanshu.jpeg", link: "https://www.linkedin.com/in/sudhanshu015/" },
  { name: "Tanya Kumari", role: "Frontend wizard", image: "/members/tanya.jpeg", link: "https://www.linkedin.com/in/tanya-kumari-067362367/" },
  { name: "Ekta Sharma", role: "Event coordinator", image: "/members/ekta.jpeg", link: "https://www.linkedin.com/in/ekta-sharma-171381382/" },
   { name: "Priyanshu Priyesh", role: "Manager", image: "/members/priyanshu.jpeg", link: "https://www.linkedin.com/in/priyanshu-priyesh-82038a328?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
];



const batchMembers = [
  { name: "Anupam", role: "President", image: "/Batch25-29/anupam.jpeg", github: "https://github.com/anupamguptaji123-droid", link: "https://www.linkedin.com/in/anupam-kumari-8167aa3a8" },
  { name: "Muskan", role: "Vice President", image: "/Batch25-29/muskan.jpeg", github: "https://github.com/muskan-0228", link: "https://www.linkedin.com/in/muskan-bharti-a17767383" },
  { name: "Nikhil", role: "Technical Head", image: "/Batch25-29/nikhil.jpeg", github: "https://github.com/nikhilkumar95f", link: "https://www.linkedin.com/in/nikhil-kumar-0n7" },
  { name: "Kavyansh", role: "Lead Organizer", image: "/Batch25-29/kavyansh.jpeg", github: "https://github.com/kavyanshsharma423-beep", link: "https://www.linkedin.com/in/kavyansh-sharma-6a6bb9381/" },
  { name: "Nisha", role: "Media Head", image: "/Batch25-29/nisha.jpeg", github: "https://github.com/Nisha77-git", link: "https://www.linkedin.com/in/nisha-bharti-278233389" },
  { name: "Mungesh", role: "Operations & Execution Lead", image: "/Batch25-29/mungesh.jpeg", github: "https://github.com/mungesh2006", link: "https://www.linkedin.com/in/mungesh-jaiswal-54a7b2381" },
];

function MemberPortrait({ member }) {
  const [imageFailed, setImageFailed] = useState(false);
  const portrait = imageFailed ? (
    <span className="founder-avatar founder-avatar-fallback" aria-hidden="true">{member.name.slice(0, 2).toUpperCase()}</span>
  ) : (
    <img className="founder-avatar" src={member.image} alt={`${member.name}, ${member.role}`} onError={() => setImageFailed(true)} />
  );

  return member.link ? (
    <a className="founder-portrait-link" href={member.link} target="_blank" rel="noreferrer" aria-label={`Open ${member.name}'s LinkedIn profile`}>
      {portrait}
    </a>
  ) : portrait;
}

export default function UserLeaderboardFooter({ sorted, top3, totalPts, podiumRef }) {
  const [foundersOpen, setFoundersOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);

  return (
    <footer className="lb-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>IGNITE_CLUB</h3>
          <p>BUGBYTE 2026<br />NEURAL LEADERBOARD<br />VISHVESHWARYA GROUP OF INSTITUTIONS</p>
          <p className="footer-brand-note">A student-led space for builders, problem-solvers, and curious minds.</p>
          <div style={{ marginTop: 16, height: 1, background: "linear-gradient(90deg,rgba(0,255,160,0.3),transparent)" }} />
          <p style={{ marginTop: 12, fontSize: 10, color: "rgba(0,255,160,0.2)", letterSpacing: "0.08em" }}>TRACKING {sorted.length} OPERATIVES · {totalPts} TOTAL XP</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>↑ Top of Leaderboard</a>
          <a href="#" onClick={e => { e.preventDefault(); podiumRef.current?.scrollIntoView({ behavior: "smooth" }); }}>◈ Elite Podium</a>
          <span style={{ cursor: "default" }}>⬡ Search Operatives</span>
          <a href="https://www.linkedin.com/in/aarav12e/" target="_blank" rel="noreferrer">✉ Contact Admin</a>
        </div>

        <div className="footer-col">
          <h4>Live Stats</h4>
          <div className="footer-stat">
            <div className="footer-stat-item"><span className="k">OPERATIVES</span><span className="v">{sorted.length}</span></div>
            <div className="footer-stat-item"><span className="k">TOP SCORE</span><span className="v">{top3[0]?.points || 0}</span></div>
            <div className="footer-stat-item"><span className="k">TOTAL XP</span><span className="v">{totalPts}</span></div>
            <div className="footer-stat-item"><span className="k">LEADER</span><span className="v" style={{ fontSize: 10 }}>{top3[0]?.name?.split(" ")[0] || "—"}</span></div>
          </div>
        </div>

      </div>

      <section id="founding-team" className="footer-founders" aria-labelledby="founding-team-title">
        <div className="founder-heading">
          <div>
            <p className="founder-kicker">THE PEOPLE BEHIND THE SIGNAL</p>
            <button className={`founder-toggle${foundersOpen ? " is-open" : ""}`} type="button" onClick={() => setFoundersOpen(open => !open)} aria-expanded={foundersOpen}>
              <h4 id="founding-team-title">Founding Team</h4>
              <span className="batch-toggle-icon" aria-hidden="true">⌄</span>
            </button>
          </div>
          <p className="founder-intro">Built by students. Driven by curiosity.</p>
        </div>
        <div className={`batch-content${foundersOpen ? " is-open" : ""}`}>
          <div className="founder-grid">
            {foundingMembers.map(member => (
              <div className="founder-card" key={member.name}>
                <MemberPortrait member={member} />
                <div className="founder-copy">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
                {member.link && <a className="founder-link" href={member.link} target="_blank" rel="noreferrer" aria-label={`Open ${member.name}'s LinkedIn profile`}>↗</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="batch-25-29" className="batch-section" aria-labelledby="batch-team-title">
        <button className={`batch-toggle${batchOpen ? " is-open" : ""}`} type="button" onClick={() => setBatchOpen(open => !open)} aria-expanded={batchOpen}>
          <span>
            <small>NEW MEMBER DIRECTORY</small>
            <strong id="batch-team-title">Batch 25-29</strong>
          </span>
          <span className="batch-toggle-icon" aria-hidden="true">⌄</span>
        </button>
        <div className={`batch-content${batchOpen ? " is-open" : ""}`}>
          <p className="batch-intro">Meet the next wave of Ignite Club members.</p>
          <div className="founder-grid batch-grid">
            {batchMembers.map(member => (
              <div className="founder-card" key={member.name}>
                <MemberPortrait member={member} />
                <div className="founder-copy">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
                <div className="batch-links">
                  {member.link && <a href={member.link} target="_blank" rel="noreferrer" aria-label={`Open ${member.name}'s LinkedIn profile`}>LI</a>}
                  {member.github && <a href={member.github} target="_blank" rel="noreferrer" aria-label={`Open ${member.name}'s GitHub profile`}>GH</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>© 2026 IGNITE CLUB — BUGBYTE · ALL NODES SECURED</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/aarav12e/" target="_blank" rel="noreferrer">⬡ LINKEDIN</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">⬡ GITHUB</a>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>↑ BACK TO TOP</a>
        </div>
      </div>
    </footer>
  );
}
