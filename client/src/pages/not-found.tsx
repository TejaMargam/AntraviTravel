import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAF7] px-5 py-20 text-[#1C1C1A] md:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="luxury-card w-full p-8 text-center md:p-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2]">
            <AlertCircle className="h-7 w-7 text-[#C9A96E]" />
          </div>
          <p className="luxury-label">404</p>
          <h1 className="mt-4 font-serif text-[40px] font-light md:text-[52px]">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-[#5d5952]">
            The page you are looking for may have moved, or the link is no longer active.
          </p>
          <Link href="/" className="luxury-cta mt-8 inline-flex rounded-full px-7 py-3 text-sm font-semibold text-white">
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
