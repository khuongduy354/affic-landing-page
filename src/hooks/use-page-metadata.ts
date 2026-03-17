import { useEffect } from "react";

interface PageMetadata {
  title: string;
  description: string;
  path: string;
}

function updateMetaTag(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = value;
  }
}

function updateLinkTag(selector: string, value: string) {
  const element = document.head.querySelector<HTMLLinkElement>(selector);
  if (element) {
    element.href = value;
  }
}

function updateWebPageSchema(title: string, description: string, url: string) {
  const scripts = Array.from(
    document.head.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
  );

  const webPageScript = scripts.find((script) => script.textContent?.includes('"@type": "WebPage"'));

  if (!webPageScript?.textContent) {
    return;
  }

  try {
    const schema = JSON.parse(webPageScript.textContent);
    schema.name = title;
    schema.description = description;
    schema.url = url;
    webPageScript.textContent = JSON.stringify(schema, null, 2);
  } catch {
    // Ignore malformed schema updates and keep the existing markup.
  }
}

export function usePageMetadata({ title, description, path }: PageMetadata) {
  useEffect(() => {
    const url = `https://afficai.com${path === "/" ? "/" : path}`;

    document.title = title;
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[property="og:url"]', url);
    updateLinkTag('link[rel="canonical"]', url);
    updateWebPageSchema(title, description, url);
  }, [description, path, title]);
}
