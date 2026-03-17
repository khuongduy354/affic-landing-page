import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { blogPosts } from "@/content/blogPosts";

export default function Blog() {
  return (
    <PageLayout
      eyebrow="Blog"
      title="Notes on Agentic AI Automation"
      description="Short articles from Affic AI about workflow design, no-code automation, and how to make AI systems useful in real operating environments."
      path="/blog/"
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Latest posts</h2>
        <p className="text-muted-foreground leading-relaxed">
          This section is intentionally simple. The goal is to publish crawlable
          explanations, not hide everything inside the homepage.
        </p>
      </section>

      <section className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8"
          >
            <p className="text-sm text-muted-foreground">
              {post.category} · {post.publishedOn} · {post.readTime}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              {post.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {post.summary}
            </p>
            <Link
              to={`/blog/${post.slug}/`}
              className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Read article
            </Link>
          </article>
        ))}
      </section>
    </PageLayout>
  );
}
