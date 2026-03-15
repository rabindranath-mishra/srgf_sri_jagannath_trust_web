import { SectionHeader } from "../components/SectionHeader";
import { GALLERY_IMAGES } from "../data/content";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Community Gallery" 
          subtitle="Glimpses of our vibrant celebrations and cultural moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="group relative h-80 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-ivory font-bold text-lg">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
