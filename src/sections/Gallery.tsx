import { SectionHeader } from "../components/SectionHeader";
import { ImageCarousel } from "../components/ImageCarousel";
import { GALLERY_IMAGES, CAROUSEL_IMAGES } from "../data/content";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Community Gallery" 
          subtitle="Glimpses of our vibrant celebrations and cultural moments."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-ivory relative">
                {item.type === "video" ? (
                  <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                    onError={(e) => console.error("Video error:", e)}
                  >
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 flex items-end p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none">
                  <p className="text-ivory font-bold text-sm tracking-tight text-center w-full">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Card */}
          <div className="group">
            <ImageCarousel images={CAROUSEL_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
};
