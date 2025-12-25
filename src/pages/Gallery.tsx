import { useState } from 'react';
import Layout from '@/components/Layout';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const categories = ['All', 'Fades', 'Beards', 'Kids', 'Designs'];

const galleryItems = [
  { id: 1, image: gallery1, category: 'Fades', title: 'Classic Skin Fade' },
  { id: 2, image: gallery2, category: 'Beards', title: 'Beard Sculpt' },
  { id: 3, image: gallery3, category: 'Fades', title: 'Textured Crop' },
  { id: 4, image: gallery4, category: 'Kids', title: 'Kids Cut' },
  { id: 5, image: gallery5, category: 'Designs', title: 'Geometric Design' },
  { id: 6, image: gallery6, category: 'Fades', title: 'High Pompadour' },
  { id: 7, image: gallery3, category: 'Fades', title: 'Low Fade' },
  { id: 8, image: gallery2, category: 'Beards', title: 'Full Beard Trim' },
  { id: 9, image: gallery1, category: 'Fades', title: 'Mid Fade' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient-gold">Work</span>
            </h1>
            <p className="text-muted-foreground font-body text-xl">
              Browse our portfolio of precision cuts, clean fades, and expert beard work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold-glow'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary font-body text-xs uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-heading text-xl text-foreground mt-1">{item.title}</h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
