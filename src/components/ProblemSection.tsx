import React, { useRef } from "react";
import { Unplug, BarChart3, Puzzle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ProblemCard({ icon, title, description, index }: ProblemCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors h-full md:border-r last:md:border-r-0"
    >
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const problems = translations.problem.cards.map((card, i) => ({
    icon: [<Unplug className="w-6 h-6 text-foreground" />, <BarChart3 className="w-6 h-6 text-foreground" />, <Puzzle className="w-6 h-6 text-foreground" />][i],
    title: t(card.title),
    description: t(card.description),
  }));

  return (
    <section id="problem" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t(translations.problem.title)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
