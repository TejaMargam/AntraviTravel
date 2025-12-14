import { DialogContent } from "@radix-ui/react-dialog";
import Enquiry from "./enquiry";

export default function ContactCTA() {

  return (
    <section id="contact" className="pt-8 pb-16 text-black bg-[#F1E4D1]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Let us craft your vacation
        </h2>
        <p className="text-xl font-light mb-8">beautiful and personal</p>

        <Enquiry buttonTitle="Start Planning with Antravi" params={{}} />
      </div>
    </section>
  );
}
