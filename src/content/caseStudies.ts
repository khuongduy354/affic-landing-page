export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "flight-data-reporting",
    title: "Flight Data Processing and Strategic Reporting",
    category: "Operations Automation",
    client: "ACV, Vietnam Airports Corporation",
    summary:
      "Affic AI automated the extraction, reporting, and QA loop for daily flight data so leadership could review accurate reports without waiting on manual spreadsheet work.",
    challenge:
      "ACV handles high-volume domestic and international flight traffic. Analysts were manually consolidating flight records, validating the numbers, and preparing Excel-based leadership reports with almost no room for error.",
    solution:
      "We built an agentic workflow that pulls operational data, structures the report, checks the output against source files, and retries exceptions before handing off the final version. The team controls the flow through a lightweight conversational interface instead of custom scripts.",
    outcome:
      "The reporting cycle moved from a manual, analyst-driven process to a largely autonomous workflow that can run daily with consistent QA.",
    highlights: [
      "Handles 100 to 200 flights per day",
      "Automates extraction, reporting, and QA",
      "Reduces dependency on repeated spreadsheet work",
    ],
  },
  {
    slug: "cold-email-outreach",
    title: "Cold Email Outreach with Hyper-Personalization",
    category: "B2B Sales Automation",
    client: "Salman Baig, Head of SEO at Alibaba Group",
    summary:
      "Affic AI built an outreach system that researches prospects, drafts individualized cold emails, and improves campaign performance over time without adding more software sprawl.",
    challenge:
      "Selling technical SEO services through cold email meant competing with generic templates that sophisticated buyers ignore. Manual prospect research and copywriting created too much cost and too much inconsistency.",
    solution:
      "We created a workflow that reviews target websites, identifies likely pain points, generates personalized copy, and monitors campaign quality through ongoing testing. Bounce handling and list maintenance were folded into the same system so the team could keep improving without buying extra point solutions.",
    outcome:
      "The client gained a repeatable outbound process that improved relevance, reduced waste, and made optimization part of the operating model instead of an afterthought.",
    highlights: [
      "Built for high-ticket B2B outreach",
      "Personalizes emails from prospect-specific signals",
      "Combines research, copy, testing, and list hygiene",
    ],
  },
  {
    slug: "google-review-management",
    title: "Google Review Management and Weekly Insights",
    category: "Customer Experience Automation",
    client: "Auberge du Dragon Rouge and Skyethgroup",
    summary:
      "Affic AI helped hospitality teams respond to reviews quickly and consistently while turning customer feedback into weekly operating insights.",
    challenge:
      "Multi-location brands needed to maintain a consistent tone across large volumes of Google reviews while also extracting useful operational feedback for managers and staff.",
    solution:
      "We deployed a workflow that drafts brand-aligned review responses, routes exceptions when needed, and summarizes recurring themes into staff-facing reports. The same system produces a cleaner feedback loop for service quality and location-level performance.",
    outcome:
      "Response handling became faster and more consistent, and management received a clearer view of what customers were praising or flagging each week.",
    highlights: [
      "Supports multi-location review workflows",
      "Keeps responses aligned with brand tone",
      "Turns feedback into weekly insights for operators",
    ],
  },
];

export function getCaseStudyBySlug(slug?: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}
