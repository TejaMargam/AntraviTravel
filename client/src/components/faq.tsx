import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQ({ faqsData }: { faqsData: FaqItem[] }) {
  const faqs = faqsData;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <AccordionItem
        value="faq-section"
        className="bg-gray-800 rounded-2xl shadow-md border border-gray-700"
      >
        <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white">
          Frequently Asked Questions
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-700 rounded-xl p-4">
              <h3 className="text-base font-medium text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
