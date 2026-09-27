import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="home-hero">
        <p className="eyebrow"><span className="eyebrow__dot" /> Welcome to my portfolio website!</p>
        <h1 className="display-title">
          Hey folks, I&apos;m
          <br />
          <span className="identity-rotator" aria-hidden="true">
            <span className="identity-rotator__item identity-rotator__name">Chua Zu Mei</span>
            <span className="identity-rotator__item identity-rotator__role">Fullstack developer</span>
          </span>
          <span className="visually-hidden">Chua Zu Mei, Fullstack developer</span>
        </h1>
        <p className="home-intro">
          A growing collection of selected work, experience, and the thinking
          behind it.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" href="/project">
            Explore projects <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/about">A little about me <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-index" aria-label="Portfolio sections">
        <Link className="index-item" href="/about">
          <span className="index-number">01</span>
          <span className="index-title">About</span>
          <span className="index-detail">Background & approach</span>
          <span className="index-arrow" aria-hidden="true">↗</span>
        </Link>
        <Link className="index-item" href="/project">
          <span className="index-number">02</span>
          <span className="index-title">Projects</span>
          <span className="index-detail">Selected work & process</span>
          <span className="index-arrow" aria-hidden="true">↗</span>
        </Link>
        <Link className="index-item" href="/cv">
          <span className="index-number">03</span>
          <span className="index-title">CV</span>
          <span className="index-detail">Experience & education</span>
          <span className="index-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}