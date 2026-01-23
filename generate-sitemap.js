import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://is-hair-salon.manus.space'; // Will be replaced with actual domain

const pages = [
  '/',
  '/menu',
  '/stylists',
  '/styles',
  '/news',
  '/recruit',
  '/products',
  '/faq',
  '/store',
  '/about',
  '/services',
  '/contact',
];

// Staff IDs from lib/staffData.ts (manually synced for now as we can't import TS easily in node script without setup)
const staffIds = ['yuki', 'wakana', 'tomo', 'shoko', 'yuka', 'satomi', 'momo'];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
  ${staffIds
    .map((id) => {
      return `
  <url>
    <loc>${BASE_URL}/staff/${id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'client', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
