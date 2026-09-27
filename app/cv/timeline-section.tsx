import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileBadge2,
  GraduationCap,
  MapPin,
} from "lucide-react";

export type TimelineKind = "work" | "education" | "certification";

export type TimelineEntry = {
  date: string;
  title: string;
  kind: TimelineKind;
  institution?: string;
  address?: string;
  details?: string;
  result?: string;
}

function TimelineMarker({ kind }: { kind: TimelineKind }) {
  return (
    <span
      className={`cv-timeline__marker cv-timeline__marker--${kind}`}
      aria-hidden="true"
    >
      {kind === "work" ? <BriefcaseBusiness /> : null}
      {kind === "education" ? <GraduationCap /> : null}
      {kind === "certification" ? <FileBadge2 /> : null}
    </span>
  );
}

export default function CvTimelineSection({
  id,
  title,
  entries,
}: {
  id: string;
  title: string;
  entries: TimelineEntry[];
}) {
  return (
    <section className="cv-section" aria-labelledby={id}>
      <h2 className="cv-section__title" id={id}>{title}</h2>
      <div className="cv-timeline">
        {entries.map((entry) => (
          <article className="cv-timeline__entry" key={entry.title}>
            <TimelineMarker kind={entry.kind} />
            <div className="cv-timeline__content">
              <div className="cv-timeline__heading">
                <h3>{entry.title}</h3>
                <time className="cv-timeline__date">
                  <CalendarDays aria-hidden="true" />
                  {entry.date}
                </time>
              </div>
              {entry.institution && (
                <p className="cv-timeline__institution">
                  <Building2 aria-hidden="true" />
                  {entry.institution}
                </p>
              )}
              {entry.address && (
                <p className="cv-timeline__address">
                  <MapPin aria-hidden="true" />
                  {entry.address}
                </p>
              )}
              {entry.details && (
                <p className="cv-timeline__details">{entry.details}</p>
              )}
              {entry.result && (
                <span className="cv-timeline__result">{entry.result}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}