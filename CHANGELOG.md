# Changelog - i's Hair Salon Website

## [2026-01-23] - Marketing & SEO Update

### Added
- **Google Analytics Integration**: Configured GA4 with Measurement ID `G-RP5WXHV181` to track visitor traffic and behavior.
- **Sitemap Generation**: Added `generate-sitemap.js` to automatically create `sitemap.xml` for better search engine indexing.
- **Structured Data (Schema.org)**:
  - Added `Person` schema to Staff Detail pages to display rich snippets (name, role, salon affiliation) in search results.
  - Added `Article` schema to News page to enhance news content visibility.
- **SEO Content**:
  - Replaced placeholder news items with real, keyword-rich articles targeting Vancouver hair salon trends (e.g., "Japanese Straightening", "Digital Perm").
  - Optimized meta titles and descriptions across all pages.

### Fixed
- **Scroll Position Issue**: Implemented `ScrollToTop.tsx` to ensure pages always start at the top when navigating (e.g., clicking "VIEW FULL MENU").

### Changed
- **Staff Page**: Enhanced Staff Detail page with dynamic SEO tags and structured data injection.
- **News Page**: Updated content structure to support rich snippets.

---

## [2026-01-23] - Initial Setup
- Project initialized with React + Tailwind CSS + shadcn/ui.
- Basic pages created: Home, Menu, Stylists, Styles, News, Recruit, Products, FAQ, Store, About, Services, Contact.
