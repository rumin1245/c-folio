import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioSections } from "./site-sections";

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="home-container">
        <p className="eyebrow"><span className="eyebrow__dot" /> Welcome to my portfolio website!</p>
        <h1 className="display-title">
          Hey folks, I&apos;m
          <br />
          <span className="identity-rotator" aria-hidden="true">
            <span className="identity-rotator__item identity-rotator__name">Chua Zu Mei</span>
            <span className="identity-rotator__item identity-rotator__role">Fullstack Developer</span>
          </span>
        </h1>
        <p className="home-intro">
          A growing collection of selected work, experience, and the thinking
          behind it.
        </p>
        <div className="home-actions">
          <Link className="button button--primary" href="/project">
            Explore projects
            <ArrowUpRight className="button-icon" aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/about">
            A little about me
            <ArrowRight className="text-link__icon" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-index" aria-label="Portfolio sections">
        {portfolioSections.map((section) => (
          <Link className="index-item" href={section.href} key={section.href}>
            <span className="index-number">{section.number}</span>
            <span className="index-title">{section.label}</span>
            <span className="index-detail">{section.detail}</span>
            <ArrowUpRight className="index-arrow" aria-hidden="true" />
          </Link>
        ))}
      </section>
    </main>
  );
}