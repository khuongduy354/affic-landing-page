import {
  Plane,
  Star,
  MessageSquare,
  Search,
  Mail,
  Video,
  Linkedin,
  FileText,
} from "lucide-react";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { LucideIcon } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface PortfolioItem {
  icon: LucideIcon;
  category: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
}

const portfolioItems: PortfolioItem[] = [
  {
    icon: Plane,
    category: "Operations",
    title: "Flight Data Processing & Strategic Reporting",
    client: "ACV — Vietnam Airports Corporation",
    description:
      "Agentic AI system that fully automates flight data processing, Excel reporting, and self-QA — replacing manual work from 3 full-time analysts.",
    challenge:
      "ACV processes 100-200 flights daily across international and domestic routes. Three full-time data analysts spent days manually compiling Excel reports for leadership — with zero tolerance for errors in strategic decisions.",
    solution:
      "Built a Multi-Agentic AI system with a Supervisory Agent that orchestrates data extraction, report generation, and automated QA. A self-healing mechanism cross-checks outputs against source data and auto-corrects until 100% accuracy. Controlled entirely via Telegram chat.",
    metrics: [
      { value: "100%", label: "Automation" },
      { value: "200", label: "Flights/Day" },
      { value: "3", label: "Analysts Replaced" },
    ],
  },
  {
    icon: Star,
    category: "Operations",
    title: "Google Review Management & Insights",
    client: "Auberge du Dragon Rouge & Skyethgroup",
    description:
      "AI-powered system that auto-responds to Google reviews with brand-consistent replies and generates weekly staff performance reports.",
    challenge:
      "Multi-location F&B chains struggled to maintain brand voice across hundreds of Google reviews while extracting actionable operational insights for staff coaching and service improvements.",
    solution:
      "Deployed an AI review responder trained on each brand's tone and guidelines, generating contextual replies in real-time. A parallel analytics engine produces weekly performance reports with staff-level insights and trend analysis.",
    metrics: [
      { value: "Real-time", label: "Responses" },
      { value: "Multi", label: "Locations" },
      { value: "Weekly", label: "AI Insights" },
    ],
  },
  {
    icon: MessageSquare,
    category: "Sales / CRM",
    title: "WhatsApp AI Agent + Bitrix24 CRM",
    client: "MarketBloom & Globe Life Insurance",
    description:
      "Pre-sales AI agent that handles outbound WhatsApp conversations, qualifies leads, and syncs everything to Bitrix24 CRM automatically.",
    challenge:
      "Sales teams were manually copy-pasting messages to hundreds of WhatsApp leads daily. Lead qualification was inconsistent, and CRM updates lagged behind actual conversations — causing lost deals.",
    solution:
      "Built a conversational AI agent integrated with WhatsApp API that handles natural dialogue, scores leads by intent signals, and auto-syncs summaries, tags, and follow-up tasks directly into Bitrix24 CRM in real-time.",
    metrics: [
      { value: "500+", label: "Chats/Day" },
      { value: "2-3%", label: "Conversion Lift" },
      { value: "24/7", label: "Active" },
    ],
  },
  {
    icon: Mail,
    category: "Sales B2B",
    title: "Cold Email Outreach with Hyper-Personalization",
    client: "Salman Baig — Head of SEO @ Alibaba Group",
    description:
      "Agentic system that scrapes prospect websites, identifies pain points, writes personalized emails, and self-optimizes campaigns via A/B testing.",
    challenge:
      "Selling high-ticket Technical SEO services via cold email meant competing against generic templates that B2B buyers immediately ignore. Email verification tools and copywriting added massive ongoing costs.",
    solution:
      "Created an agentic pipeline that scrapes prospect websites for real pain points, generates hyper-personalized email sequences, and self-optimizes via A/B testing. A zero-cost verification engine monitors Gmail bounces to keep lists clean without third-party API fees.",
    metrics: [
      { value: "70%", label: "Open Rate" },
      { value: "4%", label: "Reply Rate" },
      { value: "80%", label: "Cost Reduction" },
    ],
  },
  {
    icon: Video,
    category: "Content",
    title: "AI Video Production & Distribution",
    client: "Globe Life Insurance",
    description:
      "End-to-end automated pipeline that generates sales videos and distributes them across Instagram — from script to publish, zero manual effort.",
    challenge:
      "Creating daily sales video content required coordinating scriptwriters, editors, and social media managers — an expensive, slow process that couldn't scale for consistent daily publishing.",
    solution:
      "Engineered a fully automated pipeline: AI generates scripts from product data, produces video assets, and publishes directly to Instagram on schedule. The entire workflow from concept to live post runs with zero human intervention.",
    metrics: [
      { value: "Fully", label: "Automated" },
      { value: "Script→Post", label: "Pipeline" },
      { value: "Daily", label: "Output" },
    ],
  },
  {
    icon: Linkedin,
    category: "Content",
    title: "LinkedIn Content Automation",
    client: "Railsafe Balustrading — CEO Steven Poole",
    description:
      "AI system that researches industry trends, writes authority-building LinkedIn posts, and publishes on schedule to grow the CEO's personal brand.",
    challenge:
      "The CEO wanted to build thought leadership on LinkedIn but couldn't dedicate hours weekly to research trends, craft posts, and maintain a consistent publishing schedule alongside running the business.",
    solution:
      "Built an AI content engine that researches B2B industry trends, generates authority-building posts matching the CEO's voice, and publishes on a managed schedule. Engagement increased 20-50% with zero manual effort.",
    metrics: [
      { value: "20-50%", label: "Engagement Lift" },
      { value: "Auto", label: "Research" },
      { value: "Scheduled", label: "Publishing" },
    ],
  },
  {
    icon: FileText,
    category: "Content",
    title: "AI Blog SEO & Dynamic Layout Management",
    client: "Multikraft Australia — Biotech / Agriculture",
    description:
      "Automated SEO blog pipeline that researches keywords, writes optimized articles, and manages dynamic page layouts for organic growth.",
    challenge:
      "A biotech company needed consistent, high-quality SEO content but lacked in-house copywriters, SEO specialists, or designers. Manual blog production was too slow to compete for organic search rankings.",
    solution:
      "Deployed a full AI content pipeline: keyword research, SEO-optimized article generation, intelligent image selection, and dynamic page layout management. Each post looks hand-crafted by a professional editor — published automatically 24/7.",
    metrics: [
      { value: "SEO", label: "Optimized" },
      { value: "Auto", label: "Published" },
      { value: "80%", label: "Cost Savings" },
    ],
  },
  {
    icon: Search,
    category: "Marketing",
    title: "Omni-Channel Social Media Intelligence",
    client: "Affic AI — Internal R&D Tool",
    description:
      "Deep research tool that mines Facebook Ads, YouTube transcripts, and Reddit threads to extract structured competitive intelligence as JSON.",
    challenge:
      "Competitive research across multiple social platforms was fragmented and manual — analysts spent hours jumping between Facebook Ads Library, YouTube, and Reddit to piece together market intelligence.",
    solution:
      "Built an omni-channel deep research tool that automatically mines Facebook Ads, extracts YouTube transcript insights, and scrapes Reddit threads — outputting perfectly structured JSON that feeds directly into other AI agents for content, strategy, and analysis.",
    metrics: [
      { value: "Multi", label: "Platform" },
      { value: "JSON", label: "Structured Output" },
      { value: "Real-time", label: "Intelligence" },
    ],
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const selected = selectedProject !== null ? portfolioItems[selectedProject] : null;

  return (
    <>
      <motion.section
        id="portfolio"
        className="py-20 bg-muted/30 overflow-hidden"
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="container mx-auto px-6" variants={containerVariants}>
          {/* Heading + subtitle — full width */}
          <motion.div className="mb-8 md:mb-0" variants={containerVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              variants={itemVariants}
            >
              Real Results. <br />
              <span className="gradient-text">Real Clients.</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-md mt-4"
              variants={itemVariants}
            >
              From aviation giants to global e-commerce leaders — here's how
              our Agentic AI systems are already transforming businesses.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_1.2fr] gap-4 md:gap-8 items-center">
            {/* Left column — project pills */}
            <motion.div className="flex flex-col gap-1 md:gap-2" variants={containerVariants}>
              {portfolioItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`relative overflow-hidden flex items-center gap-2 md:gap-3 px-2 md:px-4 py-1.5 md:py-2.5 rounded-lg text-left transition-all duration-300 group border ${
                    index === activeIndex
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "border-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                  }`}
                  variants={itemVariants}
                >
                  <item.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 transition-colors duration-300 ${
                    index === activeIndex ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`} />
                  <span className={`text-xs md:text-sm truncate transition-colors duration-300 ${
                    index === activeIndex ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}>
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground/50 ml-auto flex-shrink-0 hidden lg:inline">
                    {item.category}
                  </span>
                  {index === activeIndex && (
                    <span
                      key={activeIndex}
                      className="absolute bottom-0 left-0 h-[2px] bg-primary/40 rounded-full"
                      style={{
                        animation: "pill-fill 4.6s linear forwards",
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Right column — CardSwap */}
            <motion.div
              className="relative flex items-end justify-center min-h-[400px] md:min-h-[600px] pt-[150px] md:pt-[200px]"
              variants={itemVariants}
            >
              <CardSwap
                width={380}
                height={340}
                cardDistance={50}
                verticalDistance={100}
                delay={2500}
                pauseOnHover={false}
                onCardClick={(i: number) => setSelectedProject(i)}
                onActiveChange={(i: number) => setActiveIndex(i)}
                skewAmount={5}
                easing="elastic"
              >
                {portfolioItems.map((item, index) => (
                  <Card key={index} className="p-6 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-primary/70 font-medium mt-1">
                        {item.client}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/50">
                      {item.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Detail modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                    <selected.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {selected.category}
                  </span>
                </div>
                <DialogTitle className="text-xl">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-primary/70 font-medium">
                  {selected.client}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.solution}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selected.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <div className="text-2xl font-bold gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
