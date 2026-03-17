import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudies() {
  return (
    <PageLayout
      eyebrow="Proof"
      title="Case Studies"
      description="Simple examples of how Affic AI applies agentic AI automation to operational reporting, outbound sales, and customer experience workflows."
      path="/case-studies/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Recent work</h2>
        <p className="text-muted-foreground leading-relaxed">
          These examples are intentionally short. Each one highlights a real
          workflow problem, the operating model we implemented, and the business
          outcome the client cared about.
        </p>
      </section>

      <section className="space-y-6">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {study.category}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              {study.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{study.client}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {study.summary}
            </p>
            <ul className="mt-5 grid gap-2 md:grid-cols-3">
              {study.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-border/40 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                >
                  {highlight}
                </li>
              ))}
            </ul>
            <Link
              to={`/case-studies/${study.slug}/`}
              className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Read case study
            </Link>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}
