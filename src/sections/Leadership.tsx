import { SectionHeader } from "../components/SectionHeader";
import { LEADERSHIP } from "../data/content";
import { User } from "lucide-react";

export const Leadership = () => {
  return (
    <section id="get-involved" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Trust Committee" 
          subtitle="Meet the dedicated team working to serve our community."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP.map((member, index) => (
            <div 
              key={index} 
              className="group bg-ivory rounded-3xl p-8 text-center border border-slate-100 hover:border-saffron transition-all hover:shadow-xl"
            >
              <div className="w-32 h-32 bg-saffron/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-saffron/20 transition-colors overflow-hidden">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="text-maroon w-12 h-12" />
                )}
              </div>
              <h3 className="text-xl font-bold text-maroon mb-2">{member.name}</h3>
              <p className="text-slate-dark/60 font-medium text-sm uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
