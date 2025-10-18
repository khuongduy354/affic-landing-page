import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, X, Mail, Loader2, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

// --- NEW: Reusable Modal Component ---
// --- MỚI: Component Modal có thể tái sử dụng ---
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-[90vw] max-w-md p-8 bg-card border border-border/30 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full text-muted-foreground hover:bg-muted">
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CTASection = () => {
  const benefits = [
    <>A <strong>1-on-1 strategy session</strong> with a Top 10% AI Automation Expert.</>,
    <><strong>Early access</strong> before public launch.</>,
    <><strong>Full access</strong> to all available A2A Departments at launch.</>,
    <>A <strong>done-for-you setup</strong> so your AI Departments run flawlessly.</>,
    <><strong>Dedicated support</strong> from our implementation team.</>,
    <>A <strong>special founder price</strong> available only during pre-order.</>,
  ];

  // --- NEW: State for modals and form handling ---
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://tools.munnandaffiliates.com/webhook/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      // Success
      setIsEmailModalOpen(false);
      setIsSuccessModalOpen(true);
      setEmail(''); // Reset email field

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="cta" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative bg-card/50 border border-border/20 rounded-2xl overflow-hidden group">
            <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative z-10">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Narrative Text */}
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Get in <span className="gradient-text">Early</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg">
                      <p>
                        We're launching the <strong>first wave</strong> of A2A-Powered Departments—<strong>collaborative AI squads</strong> that think, talk, and work together.
                      </p>
                      <p>
                        This early access program is designed for leaders who want to <strong>move fast, test early, and shape the next generation</strong> of intelligent automation.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Benefits List */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">When you pre-order, you'll get:</h3>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        > 
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Centered CTA Buttons at the bottom */}
                <div className="mt-16 pt-8 border-t border-border/20 text-center">
                  <div className="flex flex-col items-center gap-4">
                    {/* --- THIS BUTTON NOW OPENS THE MODAL --- */}
                    <Button 
                      size="lg" 
                      className="group w-full max-w-md shadow-lg shadow-primary/20 text-sm sm:text-base px-4 sm:px-8"
                      onClick={() => setIsEmailModalOpen(true)}
                    >
                      <span className="hidden sm:inline">PRE-ORDER NOW - Get 10% OFF at Launch</span>
                      <span className="sm:hidden">PRE-ORDER - 10% OFF</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      ...or{" "}
                      <a 
                        href="https://cal.com/nguyen-jin-f1iwjw/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-primary transition-colors"
                      >
                        book a 30-minute demo
                      </a>
                      {" "}to see how it works first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EMAIL SUBMISSION MODAL --- */}
      <Modal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)}>
        <h3 className="text-xl font-semibold mb-2">Claim Your Pre-Order Discount</h3>
        <p className="text-muted-foreground mb-6">Enter your email to secure your 10% off founder price. We'll notify you on launch day.</p>
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-input pl-10 pr-4 py-2 rounded-md border border-border/50 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit & Claim Discount"}
          </Button>
        </form>
      </Modal>

      {/* --- SUCCESS MESSAGE MODAL --- */}
      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <div className="text-center">
          <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">Your pre-order is confirmed! We've sent the 10% discount code to your inbox. Welcome to the future of A2A.</p>
          <Button onClick={() => setIsSuccessModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CTASection;

