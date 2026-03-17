import PageLayout from "@/components/PageLayout";

export default function ApiReference() {
  return (
    <PageLayout
      eyebrow="Resources"
      title="API Reference"
      description="A high-level reference page describing the external systems and workflow touchpoints commonly used in Affic AI implementations."
      path="/api-reference/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Common integrations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Implementations often connect CRMs, messaging tools, spreadsheets,
          forms, review platforms, and internal reporting endpoints. The exact
          stack depends on the workflow, but the pattern is the same: ingest,
          transform, validate, and hand off cleanly.
        </p>
      </section>
      <section className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
        <ul className="space-y-3 text-muted-foreground">
          <li>Inbound and outbound messaging channels</li>
          <li>CRM updates and task creation</li>
          <li>Reporting exports and quality checks</li>
          <li>Review systems and customer feedback loops</li>
        </ul>
      </section>
    </PageLayout>
  );
}
