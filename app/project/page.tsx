import { projectsSection } from "../site-sections";

export default function Project() {
  return (
    <main className="page-shell subpage">
      <header className="page-heading">
        <p className="eyebrow">{projectsSection.number} / {projectsSection.label}</p>
        <h1 className="page-title">Projects, in progress and complete.</h1>
        <p className="page-lede">
          Share a small selection of work. Focus each entry on the problem,
          your contribution, and what changed as a result.
        </p>
      </header>

      <section className="project-list" aria-label="Project entries">
        <article className="project-entry">
          <div className="project-art project-art--green" aria-hidden="true">
            <span>01</span><i />
          </div>
          <div className="project-copy">
            <p className="panel-label">Project one / Add a year</p>
            <h2>Add a project title</h2>
            <p>
              Describe the challenge, what you contributed, and one meaningful
              outcome. Keep it brief and specific.
            </p>
            <div className="tag-row"><span>Add a skill</span><span>Add a role</span></div>
          </div>
        </article>

        <article className="project-entry">
          <div className="project-art project-art--coral" aria-hidden="true">
            <span>02</span><i />
          </div>
          <div className="project-copy">
            <p className="panel-label">Project two / Add a year</p>
            <h2>Add another project</h2>
            <p>
              Show a different strength or point of view. A clear description
              helps visitors understand your part in the work.
            </p>
            <div className="tag-row"><span>Add a skill</span><span>Add a role</span></div>
          </div>
        </article>
      </section>
    </main>
  );
}