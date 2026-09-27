"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="site-navigation">
      <button
        className={`menu-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        className={`site-nav${isOpen ? " is-open" : ""}`}
        id="site-nav"
        aria-label="Main navigation"
      >
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/project" onClick={closeMenu}>Projects</Link>
        <Link href="/cv" onClick={closeMenu}>CV</Link>
      </nav>
    </div>
  );
}