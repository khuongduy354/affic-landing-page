import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout
      eyebrow="Company"
      title="About Affic AI"
      description="Affic AI builds agentic AI automation systems that help teams replace brittle workflows with connected, monitored, no-code operations."
      path="/about/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">What we do</h2>
        <p className="text-muted-foreground leading-relaxed">
          We design and deploy AI systems for sales, operations, content, and
          customer-facing workflows. The focus is practical automation that can
          coordinate tasks, share context, and keep humans in the loop when a
          process needs approval.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The goal is not to add more tools. The goal is to reduce operational
          drag and create workflows teams can trust in day-to-day execution.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Connected systems",
            body: "We favor workflows where agents can pass work, check context, and avoid the handoff problems that break most automation chains.",
          },
          {
            title: "Operational visibility",
            body: "Monitoring and review matter as much as generation quality. Teams need to see what happened and where intervention is required.",
          },
          {
            title: "Measured outcomes",
            body: "We focus on fewer manual hours, cleaner reporting, and faster turnaround rather than abstract AI novelty.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-border/50 bg-card/50 p-6">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-border/50 bg-muted/30 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-foreground">Next steps</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Browse recent <Link to="/case-studies/" className="text-primary hover:underline">case studies</Link> to
          see the kinds of workflows we build, or read the <Link to="/blog/" className="text-primary hover:underline">blog</Link> for
          practical notes on agentic automation and no-code operations.
        </p>
      </section>
    </PageLayout>
  );
}
