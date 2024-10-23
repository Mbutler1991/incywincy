import { writeFileSync } from 'fs';
import { join } from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define the URLs for your sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/se-optimization', changefreq: 'monthly', priority: 0.7 },
  { url: '/web-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/ecommerce-solutions', changefreq: 'monthly', priority: 0.7 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://www.incywincywebservices.com' });

// Write the URLs to the sitemap
urls.forEach(url => sitemap.write(url));
sitemap.end();

// Convert the stream to a promise and write the sitemap to a file
streamToPromise(sitemap)
  .then(data => {
    writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  });