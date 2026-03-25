import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/affic-ai-logo.png";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const isStaticMarkup = typeof window === "undefined";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const homePrefix = location.pathname === "/" ? "" : "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const navLinks = [
    { href: `${homePrefix}#solution`, label: t(translations.nav.product) },
    { href: `${homePrefix}#portfolio`, label: t(translations.nav.useCases) },
    { href: `${homePrefix}#cta`, label: t(translations.nav.pricing) },
    { href: `${homePrefix}#faq`, label: t(translations.nav.faq) },
  ];

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { x: -10, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.header
      initial={isStaticMarkup ? false : "hidden"}
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent",
        className,
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex-shrink-0"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={logo}
            alt="Affic AI"
            className="h-28 -my-20 relative z-50"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-2"
          variants={itemVariants}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              variants={itemVariants}
              whileHover={{ y: -1 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Right Side: Language Toggle + Theme Toggle + CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className={cn(
              "p-2 rounded-lg transition-colors text-lg leading-none",
              isScrolled ? "hover:bg-accent" : "hover:bg-background/20",
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
            variants={itemVariants}
            title={
              lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"
            }
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={isStaticMarkup ? false : { opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15 }}
              >
                {lang === "en" ? "🇻🇳" : "🇬🇧"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isScrolled ? "hover:bg-accent" : "hover:bg-background/20",
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
          <motion.a
            href="https://cal.com/nguyen-jin-f1iwjw/30min"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                {t(translations.nav.bookDemo)}
              </Button>
            </motion.div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-background/20 transition-colors text-lg leading-none"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
          >
            {lang === "en" ? "🇻🇳" : "🇬🇧"}
          </motion.button>

          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-background/20 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun-mobile"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="p-2 relative z-50"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={isStaticMarkup ? false : { opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed inset-0 bg-background/95 backdrop-blur-md md:hidden pt-24 px-6"
              style={{ top: "var(--nav-height, auto)" }}
            >
              <motion.nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg font-medium"
                    variants={mobileItemVariants}
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  variants={mobileItemVariants}
                  className="pt-4 border-t border-border/50"
                >
                  <motion.a
                    href="https://cal.com/nguyen-jin-f1iwjw/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                      {t(translations.nav.bookDemo)}
                    </Button>
                  </motion.a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
