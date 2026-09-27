export const aboutSection = {
  href: "/about",
  label: "About",
  number: "01",
  detail: "Background & approach",
} as const;

export const projectsSection = {
  href: "/project",
  label: "Projects",
  number: "02",
  detail: "Selected work & process",
} as const;

export const cvSection = {
  href: "/cv",
  label: "CV",
  number: "03",
  detail: "Experience & education",
} as const;

export const portfolioSections = [aboutSection, projectsSection, cvSection];

export const siteNavigationItems = [
  { href: "/", label: "Home" },
  ...portfolioSections,
];
