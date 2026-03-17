import PageLayout from "@/components/PageLayout";

export default function Documentation() {
  return (
    <PageLayout
      eyebrow="Resources"
      title="Documentation"
      description="A simple overview of how Affic AI approaches workflow discovery, implementation, monitoring, and handoff."
      path="/documentation/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Implementation flow</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most projects begin with process mapping, expected inputs and outputs,
          exception handling, and the approvals required before a workflow can
          run safely. After that, we define what the agentic system should own
          and what still belongs to a human operator.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "Workflow discovery and success criteria",
          "System design and operating safeguards",
          "Monitoring, review, and iteration",
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-border/50 bg-card/50 p-6 text-sm text-muted-foreground">
            {item}
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
