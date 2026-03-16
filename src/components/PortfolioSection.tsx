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
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";
import CardSwap, { Card } from "./CardSwap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { LucideIcon } from "lucide-react";

const icons = [Plane, Star, MessageSquare, Mail, Video, Linkedin, FileText, Search];

export default function PortfolioSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioItems = translations.portfolio.items.map((item, i) => ({
    icon: icons[i],
    category: t(item.category),
    title: t(item.title),
    client: t(item.client),
    description: t(item.description),
    challenge: t(item.challenge),
    solution: t(item.solution),
    metrics: item.metrics.map((m) => ({
      value: m.value,
      label: t(m.label),
    })),
  }));

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
              {t(translations.portfolio.title1)} <br />
              <span className="gradient-text">{t(translations.portfolio.title2)}</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-md mt-4"
              variants={itemVariants}
            >
              {t(translations.portfolio.subtitle)}
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
                    {t(translations.portfolio.theChallenge)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    {t(translations.portfolio.ourSolution)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.solution}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    {t(translations.portfolio.keyResults)}
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
