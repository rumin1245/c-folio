import { cvSection } from "../site-sections";
import CvTimelineSection, { type TimelineEntry } from "./timeline-section";

const experienceEntries: TimelineEntry[] = [
  {
    date: "Add dates",
    title: "Add your role",
    kind: "work",
    institution: "Organization / Location",
    details:
      "Summarize your responsibilities and a result or contribution you are proud of.",
  },
  {
    date: "Add dates",
    title: "Add another role",
    kind: "work",
    institution: "Organization / Location",
    details:
      "Include another relevant position, freelance engagement, or meaningful project.",
  },
];

const educationEntries = [
  {
    date: "May 2020 - June 2022",
    title: "Bachelor of Information Technology (Honours) in Software Systems Development",
    kind: "education" as const,
    institution:
      "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
    address: "Malaysia",
    result: "CGPA: 3.6875",
  },
  {
    date: "May 2018 - June 2020",
    title: "Diploma in Information System Engineering",
    kind: "education" as const,
    institution:
      "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
    address: "Malaysia",
    result: "CGPA: 3.7976",
  },
  {
    date: "June 2021 - June 2026",
    title: "Malaysia University English Test (MUET)",
    kind: "certification" as const,
    address: "Malaysia",
    result: "Band 4.0",
  },
];

export default function Cv() {
  return (
    <main className="page-shell subpage cv-page">
      <header className="page-heading cv-heading">
        <p className="eyebrow">{cvSection.number} / {cvSection.label}</p>
        <h1 className="page-title">Experience, at a glance.</h1>
        <p className="page-lede">
          A concise overview of your work, education, and the skills you bring.
        </p>
      </header>

      <CvTimelineSection
        id="experience-heading"
        title="Experience"
        entries={experienceEntries}
      />
      <CvTimelineSection
        id="education-heading"
        title="Education & Certifications"
        entries={educationEntries}
      />
      <section className="cv-section skills-section" aria-labelledby="skills-heading">
        <h2 className="cv-section__title" id="skills-heading">Skills</h2>
        <p className="skills-placeholder">Add skills, tools, or areas of expertise.</p>
      </section>
    </main>
  );
}