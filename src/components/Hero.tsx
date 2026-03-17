import { Button } from "@/components/ui/button";
import { motion, Variants, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  FileText,
  MessageSquare,
  Layers,
  Users,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

const Hero = () => {
  const isStaticMarkup = typeof window === "undefined";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const { t, tArr } = useLanguage();

  // Typing animation for the cycling words
  const words = tArr(translations.hero.words);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Feature tabs state
  const [activeTab, setActiveTab] = useState(0);

  const tabs = translations.hero.tabs.map((tab, i) => ({
    id: i,
    name: t(tab.name),
    icon: [TrendingUp, FileText, MessageSquare, Layers, Users][i],
    description: t(tab.description),
  }));

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1200;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting && !isPaused) {
        if (currentText === currentWord) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else if (isDeleting && !isPaused) {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, isPaused]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        damping: 10,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const tabsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  const mockupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const activeTabData = tabs[activeTab];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 md:py-32 text-center"
      variants={containerVariants}
      initial={isStaticMarkup ? false : "hidden"}
      animate={isStaticMarkup || isInView ? "visible" : "hidden"}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 max-w-4xl"
        variants={containerVariants}
        initial={isStaticMarkup ? false : "hidden"}
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-black text-foreground leading-tight"
          variants={titleVariants}
        >
          {t(translations.hero.headlinePre)}{" "}
          <span className="inline-block relative" style={{ minWidth: "4.5ch" }}>
            <span className="gradient-text">{currentText}</span>
            <span
              className={`transition-opacity ${
                isPaused ? "opacity-0" : "opacity-100"
              }`}
            >
              |
            </span>
            {/* Invisible text to reserve space for the longest word */}
            <span className="invisible absolute left-0" aria-hidden="true">
              {t(translations.hero.longestWord)}
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed max-w-3xl mx-auto"
          variants={subtitleVariants}
        >
          {t(translations.hero.subtitle)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={buttonContainerVariants}
        >
          <motion.a
            href="https://cal.com/jin-nguyen-affic-ai/30min?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExWEh0M3VOS3d3NDVnUHlxcHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6crA86p2JL2aCw9-k8AhAWvlHzFvfUAmThiipKQ3HAJHBCwVpd23KK9NW0dQ_aem_MjLL-fKKfo-QLSBq_B2uKQ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className="shadow-lg shadow-primary/20">
              {t(translations.hero.bookDemo)}
            </Button>
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="outline" size="lg">
              {t(translations.hero.seeUseCases)}
            </Button>
          </motion.a>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div className="mt-16 space-y-8" variants={tabsVariants}>
          <div className="flex justify-center gap-1 border-b border-border overflow-x-auto">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-1.5 px-3 py-3 pb-4 text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeTab === index
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.name.split(" ")[0]}</span>

                  {/* Active indicator */}
                  {activeTab === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Description - animates on tab change */}
          <motion.p
            key={activeTab}
            initial={isStaticMarkup ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            {activeTabData.description}
          </motion.p>

          {/* Workflow Mockup Card - persists across tabs */}
          <motion.div
            className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl shadow-primary/5"
            initial={isStaticMarkup ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <motion.span
                key={`title-${activeTab}`}
                initial={isStaticMarkup ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs font-medium text-muted-foreground"
              >
                {activeTabData.name} {t(translations.hero.dashboard)}
              </motion.span>
            </div>

            {/* Workflow nodes - horizontal flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-8">
              {/* Node 1 - Trigger */}
              <div className="flex-1 max-w-[200px] w-full">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-5 py-4 text-center">
                  <div className="text-[10px] font-bold text-emerald-500 tracking-wider mb-1">
                    {t(translations.hero.trigger)}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {t(translations.hero.newEvent)}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-muted-foreground text-xl hidden md:block">
                →
              </div>
              <div className="text-muted-foreground text-xl md:hidden">↓</div>

              {/* Node 2 - Process */}
              <div className="flex-1 max-w-[200px] w-full">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-5 py-4 text-center">
                  <div className="text-[10px] font-bold text-blue-500 tracking-wider mb-1">
                    {t(translations.hero.process)}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {t(translations.hero.aiAgent)}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-muted-foreground text-xl hidden md:block">
                →
              </div>
              <div className="text-muted-foreground text-xl md:hidden">↓</div>

              {/* Node 3 - Action */}
              <div className="flex-1 max-w-[200px] w-full">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-5 py-4 text-center">
                  <div className="text-[10px] font-bold text-purple-500 tracking-wider mb-1">
                    {t(translations.hero.action)}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {t(translations.hero.execute)}
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-purple-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {t(translations.hero.agentsActive)}
                </span>
              </div>
              <span className="text-xs text-primary font-medium">
                {t(translations.hero.allRunning)}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
