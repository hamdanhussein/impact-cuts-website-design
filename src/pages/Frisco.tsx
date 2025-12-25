import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import barber1 from '@/assets/barber-1.jpg';
import barber2 from '@/assets/barber-2.jpg';
import barber3 from '@/assets/barber-3.jpg';

const barbers = [
  {
    name: 'Marcus Johnson',
    image: barber1,
    specialty: 'Fades & Beard Work',
    experience: '8 years',
    description: 'Master of clean fades and precision beard sculpting. Known for his attention to detail.',
  },
  {
    name: 'Carlos Rivera',
    image: barber2,
    specialty: 'Creative Designs',
    experience: '6 years',
    description: 'Specializes in creative hair designs and modern textured styles.',
  },
  {
    name: 'Kevin Chen',
    image: barber3,
    specialty: 'Classic Cuts',
    experience: '5 years',
    description: 'Expert in classic gentleman cuts and traditional barbering techniques.',
  },
];

const Frisco = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4" />
              Frisco, Texas
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Your Trusted <span className="text-gradient-gold">Frisco Barbers</span>
            </h1>
            <p className="text-muted-foreground font-body text-xl">
              Meet the skilled team behind Impact Cuts. Each barber brings years of experience and a passion for the craft.
            </p>
          </div>
        </div>
      </section>

      {/* Barber Profiles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barbers.map((barber, index) => (
              <div 
                key={barber.name}
                className="group relative overflow-hidden rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-foreground mb-1">{barber.name}</h3>
                  <p className="text-primary font-body text-sm uppercase tracking-wider mb-3">{barber.specialty}</p>
                  <p className="text-muted-foreground font-body text-sm mb-4">{barber.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-body text-xs">{barber.experience} experience</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Book with {barber.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-video lg:aspect-square bg-secondary">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107066.26428849847!2d-96.89879577832032!3d33.15086169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3ca7983f676f%3A0xb9d4e9f2c8e8ad5f!2sFrisco%2C%20TX!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Impact Cuts Location"
              />
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Visit Our <span className="text-gradient-gold">Shop</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground font-body">
                      123 Main Street<br />
                      Frisco, TX 75034
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">Phone</h4>
                    <a href="tel:+14695551234" className="text-muted-foreground font-body hover:text-primary transition-colors">
                      (469) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">Hours</h4>
                    <div className="text-muted-foreground font-body space-y-1">
                      <p>Monday - Friday: 9AM - 7PM</p>
                      <p>Saturday: 9AM - 6PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-foreground font-body text-lg">
                  <span className="text-primary font-semibold">Frisco's Premier Barbershop</span> — Serving the community with precision cuts and exceptional service.
                </p>
              </div>

              <Button variant="hero" size="xl" className="mt-8">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Frisco;
