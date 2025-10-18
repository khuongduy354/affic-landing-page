import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is A2A?",
      answer: "A2A stands for Agent-to-Agent. Our breakthrough system that lets AI agents talk, share data, and work together automatically. You don’t need to code or connect anything yourself. Just plug in your department, and they start working in sync.",
    },
    {
      question: "My business is unique. Will your templates work for me?",
      answer: "Absolutely. We don’t do cookie-cutter automation. We give you a proven, no-code framework that handles 80% of the heavy lifting. Then we customize the final 20% so it fits your exact workflows without you touching a single line of code. No more “edge case” disasters or broken automations.",
    },
    {
      question: "Will I lose control of my AI business?",
      answer: "Not at all. You get a simple, no-code dashboard where you can see everything — every step, every result. You stay in control. Your AI team just takes care of the boring, repetitive work while you focus on strategy.",
    },
    {
      question: "Why pay you instead of building it myself?",
      answer: "Because time is your most expensive resource. DIY automation sounds cheaper  until you waste weeks fixing errors or “connecting” tools that never talk. We give you back 20–30 hours a week and peace of mind. You’re not buying a tool; you’re buying a ready-to-run AI department that delivers real ROI, instantly.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
      {/* CHANGED: Removed mx-auto to allow left-alignment */}
      <div className="container mx-auto px-6 max-w-4xl">
        {/* CHANGED: Removed text-center to left-align the title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 border border-border/20 rounded-lg px-6 transition-all duration-300 hover:border-primary/30"
            >
              <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:text-primary data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
