import faqsData from "@/data/faqs.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = faqsData;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <AccordionItem
        value="faq-section"
        className="bg-white rounded-2xl shadow-md"
      >
        <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-black">
          Frequently Asked Questions
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-base font-medium text-black mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
