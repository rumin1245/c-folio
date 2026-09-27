export default function Cv() {
  return (
    <main className="page-shell subpage cv-page">
      <header className="page-heading cv-heading">
        <p className="eyebrow">03 / CV</p>
        <h1 className="page-title">Experience, at a glance.</h1>
        <p className="page-lede">
          A concise overview of your work, education, and the skills you bring.
        </p>
      </header>

      <section className="cv-section" aria-labelledby="experience-heading">
        <h2 className="cv-section__title" id="experience-heading">Experience</h2>
        <div className="timeline-entry">
          <p className="timeline-date">Add dates</p>
          <div>
            <h3>Add your role</h3>
            <p className="timeline-meta">Organization / Location</p>
            <p className="timeline-description">
              Summarize your responsibilities and a result or contribution you
              are proud of.
            </p>
          </div>
        </div>
        <div className="timeline-entry">
          <p className="timeline-date">Add dates</p>
          <div>
            <h3>Add another role</h3>
            <p className="timeline-meta">Organization / Location</p>
            <p className="timeline-description">
              Include another relevant position, freelance engagement, or
              meaningful project.
            </p>
          </div>
        </div>
      </section>

      <div className="cv-bottom-grid">
        <section className="cv-section" aria-labelledby="education-heading">
          <h2 className="cv-section__title" id="education-heading">Education</h2>
          <div className="simple-entry">
            <h3>Add a degree or program</h3>
            <p className="timeline-meta">Institution / Dates</p>
          </div>
        </section>
        <section className="cv-section" aria-labelledby="skills-heading">
          <h2 className="cv-section__title" id="skills-heading">Skills</h2>
          <p className="skills-placeholder">Add skills, tools, or areas of expertise.</p>
        </section>
      </div>
    </main>
  );
}