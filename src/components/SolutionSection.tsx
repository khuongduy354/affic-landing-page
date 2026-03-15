import { Network, ShieldCheck, Rocket } from "lucide-react";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

export default function SolutionSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
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

  const cardHoverAnimation = {
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17,
    },
  };

  const features = translations.solution.features.map((feat, i) => ({
    title: t(feat.title),
    description: t(feat.description),
    icon: [Network, ShieldCheck, Rocket][i],
    visual: ["network", "dashboard", "deployment"][i],
  }));

  return (
    <motion.section
      id="solution"
      className="py-20"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            {t(translations.solution.title)}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t(translations.solution.subtitle)}
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
                variants={itemVariants}
                whileHover={cardHoverAnimation}
              >
                {/* Visual Preview Section */}
                <div className="mb-6 rounded-lg bg-muted/40 flex items-center justify-center overflow-hidden" style={{ height: "160px" }}>
                  {feature.visual === "network" && (
                    <NetworkVisual />
                  )}
                  {feature.visual === "dashboard" && (
                    <DashboardVisual />
                  )}
                  {feature.visual === "deployment" && (
                    <DeploymentVisual />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Visual Components

function NetworkVisual() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="text-primary"
      fill="none"
    >
      {/* Center node */}
      <circle cx="60" cy="60" r="12" fill="currentColor" opacity="0.9" />

      {/* Top-left node */}
      <circle cx="30" cy="30" r="10" fill="currentColor" opacity="0.6" />
      {/* Top-right node */}
      <circle cx="90" cy="30" r="10" fill="currentColor" opacity="0.6" />
      {/* Bottom-left node */}
      <circle cx="30" cy="90" r="10" fill="currentColor" opacity="0.6" />

      {/* Connection lines */}
      <line
        x1="60"
        y1="60"
        x2="30"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="60"
        y1="60"
        x2="90"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="60"
        y1="60"
        x2="30"
        y2="90"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Node-to-node connections */}
      <line
        x1="30"
        y1="30"
        x2="90"
        y2="30"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <line
        x1="30"
        y1="30"
        x2="30"
        y2="90"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      />
    </svg>
  );
}

function DashboardVisual() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-4">
      {/* Status indicators */}
      <div className="flex gap-4 w-full justify-center">
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0 }}
        >
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <div className="text-xs text-muted-foreground">{t(translations.solution.visuals.ready)}</div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <div className="text-xs text-muted-foreground">{t(translations.solution.visuals.running)}</div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <div className="text-xs text-muted-foreground">{t(translations.solution.visuals.stable)}</div>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs">
        <div className="h-2 bg-muted/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <div className="text-xs text-muted-foreground text-center mt-2">
          {t(translations.solution.visuals.healthy)}
        </div>
      </div>
    </div>
  );
}

function DeploymentVisual() {
  const { t } = useLanguage();

  const steps = [
    { label: t(translations.solution.visuals.select), icon: "1" },
    { label: t(translations.solution.visuals.configure), icon: "2" },
    { label: t(translations.solution.visuals.deploy), icon: "3" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          {/* Step circle */}
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">
              {step.icon}
            </span>
          </div>
          <span className="text-xs text-muted-foreground text-center whitespace-nowrap">
            {step.label}
          </span>

          {/* Arrow between steps */}
          {index < steps.length - 1 && (
            <motion.div
              className="hidden sm:block absolute"
              style={{
                left: `calc(50% + 24px)`,
                marginTop: "-32px",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.1 }}
            >
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                <path
                  d="M0 4h16M16 4l3-3m0 6l-3-3"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/40"
                />
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
