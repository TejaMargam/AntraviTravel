import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Enquiry({
    buttonTitle = "Start Planning with Antravi",
    params,
}: {
    buttonTitle: string;
    params: any;
}) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
                  style={{ borderRadius: "5px" }}
                >
                  {buttonTitle}
                </Button>
              </DialogTrigger>

            <DialogContent className="sm:max-w-[900px] w-full max-h-[90vh] bg-white p-0 overflow-hidden rounded-2xl shadow-xl">
                {/* Form iframe */}
                <div className="w-full h-[80vh]">
                    <iframe
                        src="https://forms.zohopublic.in/antraviprivatelimited1/form/MaldivesLeadform/formperma/_a_99D1bGodoxLFMFMHjBHMTesbFNNo3qxhrECPTfi0?zf_rszfm=1"
                        className="w-full h-full"
                        frameBorder="0"
                        style={{ border: "none" }}
                        allowFullScreen
                        title="Maldives Lead Form"
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    );
}
