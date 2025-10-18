import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "My business is unique. Will your templates work for me?",
      answer: "Absolutely. We provide a proven framework and then customize the final 20% to fit your business perfectly. This approach avoids disasters from the \"nuance and edge cases\" where most automations break down.",
    },
    {
      question: "Will I lose control of my business?",
      answer: "No way. You get a simple dashboard with full \"observability\" to \"watch the workflow run step by step.\" You stay in charge; your AI team just does the heavy lifting.",
    },
    {
      question: "Why should I pay you instead of building this myself?",
      answer: "How much is your time worth? How much does \"being stuck\" cost? We give you back \"20-30 hours a week\" and your sanity. You're not buying a tool; you're investing in a result that consistently delivers actual ROI.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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
