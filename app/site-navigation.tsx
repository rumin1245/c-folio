"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteNavigationItems } from "./site-sections";

export default function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/+$/, "") || "/";

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
        {isOpen ? (
          <X className="menu-icon" aria-hidden="true" />
        ) : (
          <Menu className="menu-icon" aria-hidden="true" />
        )}
      </button>
      <nav
        className={`site-nav${isOpen ? " is-open" : ""}`}
        id="site-nav"
        aria-label="Main navigation"
      >
        {siteNavigationItems.map((item) => {
          const itemPath = item.href.replace(/\/+$/, "") || "/";
          const isCurrentPage =
            currentPath === itemPath ||
            (itemPath !== "/" && currentPath.endsWith(itemPath));

          return (
            <Link
              aria-current={isCurrentPage ? "page" : undefined}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}