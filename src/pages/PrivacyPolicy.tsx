import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="Basic information about the data Affic AI collects through this website and how that information is used for communication and service delivery."
      path="/privacy-policy/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you contact Affic AI through forms, email, or scheduling links, we
          may collect your name, email address, company details, and the context
          you provide about your workflow needs.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">How we use it</h2>
        <p className="text-muted-foreground leading-relaxed">
          We use submitted information to respond to inquiries, evaluate project
          fit, schedule conversations, and improve how the site and workflows
          are delivered. We do not publish client information without consent.
        </p>
      </section>
    </PageLayout>
  );
}
