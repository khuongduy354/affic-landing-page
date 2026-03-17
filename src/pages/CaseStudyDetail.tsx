import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { getCaseStudyBySlug } from "@/content/caseStudies";
import NotFound from "./NotFound";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <NotFound />;
  }

  return (
    <PageLayout
      eyebrow={study.category}
      title={study.title}
      description={study.summary}
      path={`/case-studies/${study.slug}/`}
    >
      <section className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
        <p className="text-sm text-muted-foreground">{study.client}</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">{study.summary}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground">Challenge</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{study.challenge}</p>
        </article>
        <article className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground">Solution</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{study.solution}</p>
        </article>
      </section>

      <section className="rounded-2xl border border-border/50 bg-muted/30 p-6 md:p-8">
        <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{study.outcome}</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {study.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-xl border border-border/40 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <Link to="/case-studies/" className="mt-6 inline-flex text-sm font-medium text-primary hover:underline">
          Back to all case studies
        </Link>
      </section>
    </PageLayout>
  );
}
