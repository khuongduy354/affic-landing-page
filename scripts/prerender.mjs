import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");

const routes = [
  {
    path: "/",
    output: "index.html",
    title: "Affic AI | Agentic AI Automation Services",
    description:
      "Affic AI builds agentic AI automation systems that help sales, content, media, and operations teams work faster with connected no-code AI departments.",
    eyebrow: "Home",
    keepFaq: true,
  },
  {
    path: "/about/",
    output: "about/index.html",
    title: "About Affic AI | Agentic AI Automation Company",
    description:
      "Learn how Affic AI approaches agentic AI automation, workflow design, and operational systems for modern business teams.",
    eyebrow: "Company",
  },
  {
    path: "/case-studies/",
    output: "case-studies/index.html",
    title: "Case Studies | Affic AI",
    description:
      "Browse simple case studies showing how Affic AI applies agentic AI automation to operations, B2B sales, and customer experience workflows.",
    eyebrow: "Proof",
  },
  {
    path: "/case-studies/flight-data-reporting/",
    output: "case-studies/flight-data-reporting/index.html",
    title: "Flight Data Reporting Case Study | Affic AI",
    description:
      "How Affic AI automated flight data extraction, reporting, and QA for a high-volume airport operations workflow.",
    eyebrow: "Case Study",
  },
  {
    path: "/case-studies/cold-email-outreach/",
    output: "case-studies/cold-email-outreach/index.html",
    title: "Cold Email Outreach Case Study | Affic AI",
    description:
      "How Affic AI built a hyper-personalized outbound workflow for technical B2B sales and campaign optimization.",
    eyebrow: "Case Study",
  },
  {
    path: "/case-studies/google-review-management/",
    output: "case-studies/google-review-management/index.html",
    title: "Google Review Management Case Study | Affic AI",
    description:
      "How Affic AI improved review responses and weekly feedback reporting for multi-location hospitality brands.",
    eyebrow: "Case Study",
  },
  {
    path: "/blog/",
    output: "blog/index.html",
    title: "Blog | Affic AI",
    description:
      "Read short articles from Affic AI about agentic workflows, no-code automation, and building AI systems that teams can actually use.",
    eyebrow: "Blog",
  },
  {
    path: "/blog/agentic-ai-automation-for-operations/",
    output: "blog/agentic-ai-automation-for-operations/index.html",
    title: "What Agentic AI Automation Looks Like in Real Operations | Affic AI",
    description:
      "A practical overview of how agentic AI systems reduce brittle automation chains and create monitored workflows for real operating teams.",
    eyebrow: "Article",
  },
  {
    path: "/blog/how-to-choose-no-code-ai-workflows/",
    output: "blog/how-to-choose-no-code-ai-workflows/index.html",
    title: "How to Choose No-Code AI Workflows | Affic AI",
    description:
      "A short framework for choosing AI workflow opportunities without creating more tool sprawl or operational debt.",
    eyebrow: "Article",
  },
  {
    path: "/documentation/",
    output: "documentation/index.html",
    title: "Documentation | Affic AI",
    description:
      "A simple overview of how Affic AI approaches workflow discovery, implementation, monitoring, and operational handoff.",
    eyebrow: "Resources",
  },
  {
    path: "/api-reference/",
    output: "api-reference/index.html",
    title: "API Reference | Affic AI",
    description:
      "A high-level reference for the systems, integrations, and workflow touchpoints commonly used in Affic AI implementations.",
    eyebrow: "Resources",
  },
  {
    path: "/integration-guide/",
    output: "integration-guide/index.html",
    title: "Integration Guide | Affic AI",
    description:
      "A short guide to preparing systems, permissions, and workflow ownership before deploying an Affic AI automation workflow.",
    eyebrow: "Resources",
  },
  {
    path: "/privacy-policy/",
    output: "privacy-policy/index.html",
    title: "Privacy Policy | Affic AI",
    description:
      "Basic information about how Affic AI collects and uses data submitted through this website and related contact flows.",
    eyebrow: "Legal",
  },
  {
    path: "/terms-of-service/",
    output: "terms-of-service/index.html",
    title: "Terms of Service | Affic AI",
    description:
      "Basic terms governing use of the Affic AI website, published materials, and direct service inquiries.",
    eyebrow: "Legal",
  },
  {
    path: "/cookie-policy/",
    output: "cookie-policy/index.html",
    title: "Cookie Policy | Affic AI",
    description:
      "A short explanation of the analytics tooling and browser storage used on the Affic AI website.",
    eyebrow: "Legal",
  },
];

function absoluteUrl(routePath) {
  return `https://afficai.com${routePath}`;
}

function buildNoScript(route) {
  return [
    "<noscript>",
    "  <main>",
    "    <header>",
    `      <h1>${route.title}</h1>`,
    `      <p>${route.description}</p>`,
    "      <nav>",
    '        <a href="https://afficai.com/">Home</a>',
    '        <a href="https://afficai.com/case-studies/">Case Studies</a>',
    '        <a href="https://afficai.com/blog/">Blog</a>',
    '        <a href="https://afficai.com/about/">About</a>',
    "      </nav>",
    "    </header>",
    "    <section>",
    `      <h2>${route.eyebrow}</h2>`,
    `      <p>${route.description}</p>`,
    "    </section>",
    "  </main>",
    "</noscript>",
  ].join("\n");
}

function buildWebPageSchema(route) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://afficai.com/#webpage",
      url: absoluteUrl(route.path),
      name: route.title,
      description: route.description,
      inLanguage: "en",
      isPartOf: {
        "@id": "https://afficai.com/#website",
      },
      about: {
        "@id": "https://afficai.com/#organization",
      },
    },
    null,
    2
  );
}

function replaceFirst(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function applyMetadata(html, route) {
  const url = absoluteUrl(route.path);

  let updated = html;
  updated = replaceFirst(updated, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
  updated = replaceFirst(
    updated,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${route.description}" />`
  );
  updated = replaceFirst(
    updated,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`
  );
  updated = replaceFirst(
    updated,
    /<link rel="alternate" hreflang="en" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="en" href="${url}" />`
  );
  updated = replaceFirst(
    updated,
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`
  );
  updated = replaceFirst(
    updated,
    /<meta\s+[\s\S]*?property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  updated = replaceFirst(
    updated,
    /<meta\s+[\s\S]*?property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  updated = replaceFirst(
    updated,
    /<meta\s+[\s\S]*?name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  updated = replaceFirst(
    updated,
    /<meta\s+[\s\S]*?property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  updated = replaceFirst(
    updated,
    /<meta\s+[\s\S]*?name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  updated = replaceFirst(
    updated,
    /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "WebPage"[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${buildWebPageSchema(route)}\n</script>`
  );
  updated = replaceFirst(updated, /<noscript>[\s\S]*?<\/noscript>/, buildNoScript(route));

  if (!route.keepFaq) {
    updated = updated.replace(
      /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>\s*/g,
      ""
    );
  }

  return updated;
}

function buildSitemap(routeEntries) {
  const urls = routeEntries
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>2026-03-17</lastmod>
    <priority>${route.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const template = await readFile(templatePath, "utf8");
const { render } = await import(pathToFileURL(serverEntryPath).href);

for (const route of routes) {
  const appHtml = render(route.path);
  const withApp = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  const finalHtml = applyMetadata(withApp, route);
  const outputPath = path.join(distDir, route.output);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, finalHtml);
}

await writeFile(path.join(distDir, "sitemap.xml"), buildSitemap(routes));
await rm(path.join(distDir, "server"), { recursive: true, force: true });
