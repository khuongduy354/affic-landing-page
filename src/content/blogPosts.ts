export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedOn: string;
  readTime: string;
  summary: string;
  sections: BlogPostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "agentic-ai-automation-for-operations",
    title: "What Agentic AI Automation Looks Like in Real Operations",
    category: "Operations",
    publishedOn: "2026-03-17",
    readTime: "4 min read",
    summary:
      "A practical view of how agentic AI systems replace brittle automation chains with workflows that can coordinate, check output, and recover from exceptions.",
    sections: [
      {
        heading: "Automation usually breaks at the handoff",
        paragraphs: [
          "Most teams do not struggle because they lack tools. They struggle because the tools do not share enough context to hand work off cleanly.",
          "Once a workflow needs multiple systems, human review, and timing logic, the process becomes fragile and expensive to maintain.",
        ],
      },
      {
        heading: "Agentic workflows are useful when each step has a role",
        paragraphs: [
          "A stronger model is to treat the workflow as a coordinated system. One agent gathers inputs, another structures the work, and a supervisory layer checks quality before delivery.",
          "That design reduces silent failures and makes it easier to see where intervention is actually needed.",
        ],
      },
      {
        heading: "The business win is operational clarity",
        paragraphs: [
          "The value is not novelty. The value is faster turnaround, better reporting quality, and fewer hours spent patching edge cases.",
          "When the process is visible and monitored, teams can trust automation enough to use it for real operating work.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-no-code-ai-workflows",
    title: "How to Choose No-Code AI Workflows Without Creating More Tool Sprawl",
    category: "Strategy",
    publishedOn: "2026-03-17",
    readTime: "3 min read",
    summary:
      "A simple framework for choosing AI workflow opportunities that save time without introducing a maintenance burden.",
    sections: [
      {
        heading: "Start with repetitive work that already has rules",
        paragraphs: [
          "The best candidates are tasks with recurring inputs, a known approval path, and a measurable output.",
          "If the team cannot explain the current process clearly, automation usually amplifies the mess instead of fixing it.",
        ],
      },
      {
        heading: "Avoid stacking isolated tools",
        paragraphs: [
          "It is easy to buy one tool for drafting, another for enrichment, another for messaging, and another for reporting. That usually creates more dependencies than value.",
          "A better approach is to choose workflows that can live inside one monitored system with clear ownership.",
        ],
      },
      {
        heading: "Measure the workflow, not just the model",
        paragraphs: [
          "The output quality matters, but so do retry handling, visibility, and the time required to keep the automation healthy.",
          "The teams that win with AI are the teams that design operations, not just prompts.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug?: string) {
  return blogPosts.find((entry) => entry.slug === slug);
}
