import { Button } from "@/components/ui/button";
import { motion, Variants, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        when: "beforeChildren",
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

  const imageVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  const words = ["Team", "Department", "Business"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseDuration = 1200; // Duration to pause when word is complete

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
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, isPaused]);

  // Animation variants for staggered entrance

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

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative hero-glow h-screen flex items-center justify-center snap-start snap-always text-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-black text-foreground leading-tight max-w-4xl mx-auto flex flex-col items-center gap-2"
          variants={titleVariants}
        >
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>Build Your Own</span>
          </div>
          <div className="block">
            <span className="gradient-text inline-flex items-center">
              {currentText}
              <span
                className={`ml-1 ${isPaused ? "opacity-0" : "animate-blink"}`}
              >
                |
              </span>
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-medium text-muted-foreground"></span>
            "In Just 5 minutes with A2A"
          </div>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto"
          variants={paragraphVariants}
        >
          You're about to discover the way to deploy your own ai employees to
          automate your boring, complex daily tasks without any technical skill
          or strong business background.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={buttonVariants}
        >
          <a href="#cta" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-primary/20"
              >
                Claim Your First AI Team
              </Button>
            </motion.div>
          </a>
          <a
            href="https://cal.com/jin-nguyen-awex4y/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a Free Demo
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
