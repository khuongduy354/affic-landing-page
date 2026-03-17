import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { getBlogPostBySlug } from "@/content/blogPosts";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <PageLayout
      eyebrow={post.category}
      title={post.title}
      description={post.summary}
      path={`/blog/${post.slug}/`}
    >
      <section className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
        <p className="text-sm text-muted-foreground">
          {post.publishedOn} · {post.readTime}
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">{post.summary}</p>
      </section>

      {post.sections.map((section) => (
        <section key={section.heading} className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-2xl border border-border/50 bg-muted/30 p-6 md:p-8">
        <Link to="/blog/" className="inline-flex text-sm font-medium text-primary hover:underline">
          Back to blog
        </Link>
      </section>
    </PageLayout>
  );
}
