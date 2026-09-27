"use client";

import { useState } from "react";
import Link from "next/link";
import { siteNavigationItems } from "./site-sections";

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
        {siteNavigationItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}