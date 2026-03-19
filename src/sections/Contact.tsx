import { SectionHeader } from "../components/SectionHeader";
import { CONTACT_INFO } from "../data/content";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader 
            title="Get in Touch" 
            className="mb-8"
          />
          <p className="text-lg text-slate-dark/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to volunteer? We'd love to 
            hear from you. Join us in building a vibrant community at Shriram Greenfield.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center group hover:border-saffron/30 transition-all">
              <div className="bg-saffron/10 p-5 rounded-2xl mb-6 group-hover:bg-saffron/20 transition-colors">
                <MapPin className="text-maroon w-8 h-8" />
              </div>
              <h4 className="font-bold text-maroon text-xl mb-3">Our Location</h4>
              <p className="text-slate-dark/70 leading-relaxed text-sm">
                {CONTACT_INFO.address}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center group hover:border-saffron/30 transition-all">
              <div className="bg-saffron/10 p-5 rounded-2xl mb-6 group-hover:bg-saffron/20 transition-colors">
                <Mail className="text-maroon w-8 h-8" />
              </div>
              <h4 className="font-bold text-maroon text-xl mb-3">Email Us</h4>
              <p className="text-slate-dark/70 leading-relaxed text-sm font-medium break-all">
                {CONTACT_INFO.email}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center group hover:border-saffron/30 transition-all">
              <div className="bg-saffron/10 p-5 rounded-2xl mb-6 group-hover:bg-saffron/20 transition-colors">
                <Phone className="text-maroon w-8 h-8" />
              </div>
              <h4 className="font-bold text-maroon text-xl mb-3">Call/WhatsApp</h4>
              <p className="text-slate-dark/70 leading-relaxed text-sm font-medium">
                {CONTACT_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
