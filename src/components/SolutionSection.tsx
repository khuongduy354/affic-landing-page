import { X, Check } from "lucide-react";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";

export default function SolutionSection() {
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
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  };

  const oldWay = [
    {
      title: "Disconnected Tools",
      description:
        "One small API change breaks the entire chain of automation.",
    },
    {
      title: "Constant Debugging",
      description: 'You\'re always fixing things because they "silently fail".',
    },
    {
      title: "Requires Technical Skill",
      description: 'You get "stuck on node errors" you don\'t understand.',
    },
  ];

  const a2aWay = [
    {
      title: "One Smart Department",
      description: "Agents talk, share, and work together seamlessly.",
    },
    {
      title: "Self-Healing",
      description:
        'Total "observability" to spot and fix errors before you even notice.',
    },
    {
      title: "Plug-and-Play",
      description: "No code, no headaches. Just click and go.",
    },
  ];

  return (
    <motion.section
      id="solution"
      className="py-20 bg-muted/30"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={containerVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            variants={itemVariants}
          >
            Introducing the{" "}
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              A2A Revolution
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-4 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We don't sell tools. We deliver ready-to-work DEPARTMENTS. Elite AI
            teams, pre-trained and communicating with our Agent-to-Agent (A2A)
            tech.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {/* The Old Way */}
          <motion.div
            className="bg-card p-8 rounded-xl border border-danger/20"
            variants={itemVariants}
            whileHover={cardHoverAnimation}
          >
            <h3 className="text-2xl font-bold text-danger mb-4">
              The Old, Broken Way
            </h3>
            <motion.ul className="space-y-4">
              {oldWay.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <X className="w-5 h-5 text-danger mr-3 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* The A2A Way */}
          <motion.div
            className="bg-card p-8 rounded-xl border border-primary/30"
            variants={itemVariants}
            whileHover={cardHoverAnimation}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              The A2A Revolution
            </h3>
            <motion.ul className="space-y-4">
              {a2aWay.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
