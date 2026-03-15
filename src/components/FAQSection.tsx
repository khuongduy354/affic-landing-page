import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

const FAQSection = () => {
  const { t } = useLanguage();
  const faqs = translations.faq.items.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="faq" className="py-20 md:py-32">
      {/* CHANGED: Removed mx-auto to allow left-alignment */}
      <div className="container mx-auto px-6 max-w-4xl">
        {/* CHANGED: Removed text-center to left-align the title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          {t(translations.faq.title)}
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
