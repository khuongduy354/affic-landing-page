import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { usePageMetadata } from "@/hooks/use-page-metadata";

interface PageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

export default function PageLayout({
  eyebrow,
  title,
  description,
  path,
  children,
}: PageLayoutProps) {
  const location = useLocation();

  usePageMetadata({ title, description, path });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Navigation className="fixed top-0 left-0 right-0 z-50" />
      <main className="pt-28 md:pt-32">
        <section className="border-b border-border/40 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-6 py-14 md:py-20">
            <Link
              to="/"
              className="inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to home
            </Link>
            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
                {title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-10">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
