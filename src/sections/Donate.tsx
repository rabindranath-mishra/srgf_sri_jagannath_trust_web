import { QrCode } from "lucide-react";

export const Donate = () => {
  return (
    <section id="donate" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-maroon rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-in-up">
          <div className="md:w-1/2 p-12 text-ivory flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-amber">How to Donate</h2>
            <p className="mb-8 opacity-80 text-lg leading-relaxed">
              We accept donations via bank transfer, UPI, or in-kind support. 
              All contributions are used exclusively for community welfare 
              and cultural preservation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber/20 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                  <div className="w-2 h-2 bg-amber rounded-full" />
                </div>
                <p className="text-sm opacity-90 italic">
                  Your contributions help us preserve heritage and serve the community. 
                  Financial reports are shared with all members periodically.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-12 flex flex-col items-center justify-center text-center">
            <div className="w-48 h-48 bg-slate-100 rounded-3xl mb-6 flex items-center justify-center border-2 border-dashed border-slate-300">
              <QrCode className="w-24 h-24 text-slate-300" />
            </div>
            <p className="text-slate-dark/60 font-semibold mb-4 tracking-wide uppercase text-xs">Scan for UPI Payment</p>
            <div className="w-full space-y-4 text-left">
              <div className="p-4 bg-ivory rounded-xl border border-saffron/20 shadow-sm">
                <p className="text-xs text-slate-dark/40 uppercase font-bold tracking-wider mb-1">Account Holder</p>
                <p className="font-bold text-maroon text-lg">SRGF Sri Jagannath Trust</p>
              </div>
              <div className="p-4 bg-ivory rounded-xl border border-saffron/20 shadow-sm">
                <p className="text-xs text-slate-dark/40 uppercase font-bold tracking-wider mb-1">Bank Details</p>
                <p className="font-bold text-maroon text-lg">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
