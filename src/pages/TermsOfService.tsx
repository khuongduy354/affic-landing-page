import PageLayout from "@/components/PageLayout";

export default function TermsOfService() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Terms of Service"
      description="Basic terms governing use of the Affic AI website, published materials, and direct inquiries submitted through the site."
      path="/terms-of-service/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Website use</h2>
        <p className="text-muted-foreground leading-relaxed">
          The content on this site is provided for general information about
          Affic AI services, workflows, and company capabilities. It does not
          create a client relationship by itself.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Project scope</h2>
        <p className="text-muted-foreground leading-relaxed">
          Any implementation work, pricing, timelines, and support commitments
          are governed by the agreement signed with a client. Website content is
          illustrative and may evolve as services change.
        </p>
      </section>
    </PageLayout>
  );
}
