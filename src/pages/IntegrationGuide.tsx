import PageLayout from "@/components/PageLayout";

export default function IntegrationGuide() {
  return (
    <PageLayout
      eyebrow="Resources"
      title="Integration Guide"
      description="A short guide to preparing systems, permissions, and process ownership before deploying an Affic AI workflow."
      path="/integration-guide/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Before launch</h2>
        <p className="text-muted-foreground leading-relaxed">
          The cleanest deployments happen when a team can define its source of
          truth, exception path, and business owner before the workflow goes
          live. That keeps automation from drifting into a collection of scripts
          nobody wants to maintain.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "Confirm the systems that own the source data",
          "Decide where approvals or human review belong",
          "Define reporting, alerts, and escalation rules",
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-border/50 bg-card/50 p-6 text-sm text-muted-foreground">
            {item}
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
