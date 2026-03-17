import PageLayout from "@/components/PageLayout";

export default function CookiePolicy() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      description="A short explanation of the analytics and browser storage used on the Affic AI website."
      path="/cookie-policy/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Analytics and storage</h2>
        <p className="text-muted-foreground leading-relaxed">
          This site uses analytics tooling and browser storage to support
          measurement, theme preferences, and language preferences. These
          technologies help us understand site usage and maintain basic user
          settings between visits.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
        <p className="text-muted-foreground leading-relaxed">
          You can clear browser storage or adjust browser privacy settings if you
          do not want these preferences and analytics signals retained on your
          device.
        </p>
      </section>
    </PageLayout>
  );
}
