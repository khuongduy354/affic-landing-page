import React from 'react'; // Added for correctness
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {
  // FIXED: The benefits array now uses JSX for rich content.
  // This is the safe and standard way to handle bolding.
  const benefits = [
    <>A 1-on-1 strategy call with a <strong className="font-semibold text-foreground">Top 10% AI expert</strong>.</>,
    "Early access before anyone else.",
    "100% dedicated support from our team.",
  ];

  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/20 shadow-2xl shadow-primary/10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            You're One Click Away From Your <span className="gradient-text">First AI Employee</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            This is the future of work. Get in early, gain an unfair advantage, and secure a special price that will never be offered again.
          </p>
          
          <div className="my-8 text-left inline-block">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                // Use `items-start` for better alignment if text wraps to multiple lines
                <li key={index} className="flex items-start"> 
                  {/* Added `mt-1` to the check for better vertical alignment with text */}
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  {/* FIXED: Removed `dangerouslySetInnerHTML` and now render the content directly */}
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto hover:-translate-y-0.5 transition-smooth shadow-lg shadow-primary/20">
              PRE-ORDER AND GET 10% OFF
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:-translate-y-0.5 transition-smooth" asChild>
              <a href="https://cal.com/nguyen-jin-f1iwjw/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo First
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
