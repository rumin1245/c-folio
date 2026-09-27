import { aboutSection } from "../site-sections";

export default function About() {
  return (
    <main className="page-shell subpage">
      <header className="page-heading">
        <p className="eyebrow">{aboutSection.number} / {aboutSection.label}</p>
        <h1 className="page-title">The person behind the work.</h1>
        <p className="page-lede">
          Use this space to introduce yourself, the things you care about, and
          the perspective you bring to your work.
        </p>
      </header>

      <div className="about-layout">
        <section className="prose-block">
          <h2>A little context</h2>
          <p>
            Start with a few sentences about who you are and what you do. A
            specific detail about your path or interests makes this page feel
            unmistakably yours.
          </p>
          <p>
            You can also share how you approach a challenge, what you enjoy
            learning, or the kind of collaboration that brings out your best
            work.
          </p>
        </section>

        <aside className="details-panel" aria-label="About details">
          <p className="panel-label">A few details</p>
          <dl className="detail-list">
            <div><dt>Based in</dt><dd>Add your location</dd></div>
            <div><dt>Working on</dt><dd>Add your current focus</dd></div>
            <div><dt>Interested in</dt><dd>Add a few interests</dd></div>
          </dl>
        </aside>
      </div>
    </main>
  );
}