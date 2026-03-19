import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { TRUST_NAME, NAVIGATION, CONTACT_INFO, TAGLINE } from "../data/content";
import trustLogo from "../assets/trust_logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full shadow-lg border-2 border-saffron/30 bg-white">
                <img 
                  src={trustLogo} 
                  alt="SRGF Sri Jagannath Trust Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">
                SRGF Sri Jagannath Trust
              </span>
            </div>
            <p className="text-ivory/60 leading-relaxed mb-8">
              A cultural and community initiative founded by the Odia residents 
              of Shriram Greenfield, dedicated to serving and uniting all residents.
            </p>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-6">
              <p className="text-xs text-amber/80 font-semibold mb-1 uppercase">Registration</p>
              <p className="text-xs font-mono text-amber tracking-wider">{CONTACT_INFO.registrationNumber}</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron hover:text-maroon transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron hover:text-maroon transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron hover:text-maroon transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-amber text-lg mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-ivory/60 hover:text-amber transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-amber text-lg mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-amber shrink-0 mt-1" />
                <span className="text-ivory/60">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-amber shrink-0 mt-1" />
                <span className="text-ivory/60">{CONTACT_INFO.phone}</span>
              </li>
              <li className="text-ivory/60 text-sm pt-2">
                <p className="font-semibold mb-2 text-amber">Address</p>
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-ivory/40 text-sm">
            © {currentYear} {TRUST_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-ivory/40">
            <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
