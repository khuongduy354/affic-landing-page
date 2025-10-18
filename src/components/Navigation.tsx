import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/affic-ai-logo.png";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#departments", label: "Use Cases" },
    { href: "#faq", label: "FAQ" },
  ];

  const navVariants: Variants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants: Variants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm " : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.img 
          src={logo} 
          alt="Affic AI" 
          className="h-28 -my-20 relative z-50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          variants={itemVariants}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-smooth relative group py-2"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              custom={index}
            >
              {link.label}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100" 
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA Button */}
        <motion.a
          href="https://cal.com/jin-nguyen-awex4y/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:opacity-90"
            >
              Book a Free Demo
            </Button>
          </motion.div>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          className="md:hidden relative z-50"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg md:hidden pt-24 px-6"
            >
              <motion.nav className="flex flex-col space-y-6 text-lg">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                    variants={mobileItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://cal.com/jin-nguyen-awex4y/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  variants={mobileItemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button className="w-full">Book a Free Demo</Button>
                  </motion.div>
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}