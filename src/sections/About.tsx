import { SectionHeader } from "../components/SectionHeader";
import { IMPACT_CARDS } from "../data/content";
import { Users, Heart, Home as HomeIcon } from "lucide-react";

const ICON_MAP = {
  Users: Users,
  Heart: Heart,
  Home: HomeIcon,
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="About the Trust" 
              className="text-left mb-8"
            />
            <div className="space-y-6 text-lg text-slate-dark/80 leading-relaxed">
              <p>
                SRGF Sri Jagannath Trust was formed by the Odia residents of 
                Shriram Greenfield, Bengaluru, with the vision of preserving the 
                spiritual and cultural heritage of Lord Jagannath and Odisha while 
                creating a warm, inclusive, and vibrant platform for all residents 
                of the apartment community.
              </p>
              <p>
                Inspired by the universal and inclusive spirit of Lord Jagannath, 
                the trust welcomes participation from families of all backgrounds 
                through festivals, seva, cultural gatherings, and community-building activities.
              </p>
              <div className="p-6 bg-ivory border-l-4 border-saffron rounded-r-xl shadow-sm">
                <p className="italic font-medium text-maroon">
                  "Our mission is to bridge cultures and hearts, making Shriram Greenfield 
                  a home where tradition meets togetherness."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMPACT_CARDS.map((card, index) => {
              const Icon = ICON_MAP[card.icon as keyof typeof ICON_MAP];
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-saffron/30 hover:shadow-xl transition-all group"
                >
                  <div className="bg-saffron/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-saffron/20 transition-colors">
                    <Icon className="text-maroon w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon mb-3">{card.title}</h3>
                  <p className="text-slate-dark/70 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
            <div className="bg-maroon p-8 rounded-2xl shadow-lg text-ivory flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 text-amber">Community Focused</h3>
              <p className="text-ivory/80 leading-relaxed">
                Dedicated to serving every resident in Shriram Greenfield, 
                Budigere Cross, Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
