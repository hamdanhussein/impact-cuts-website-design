import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Scissors, Award, Users, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-barbershop.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const services = [
  { 
    title: 'Haircut', 
    description: 'Precision cuts tailored to your style',
    image: gallery1
  },
  { 
    title: 'Skin Fade', 
    description: 'Clean, seamless fade transitions',
    image: gallery3
  },
  { 
    title: 'Beard Trim', 
    description: 'Sharp lines and perfect shaping',
    image: gallery2
  },
  { 
    title: 'Haircut + Beard', 
    description: 'Complete grooming package',
    image: gallery4
  },
];

const features = [
  { icon: Award, title: 'Elite, Experienced Barbers', description: 'Years of expertise in premium grooming' },
  { icon: Scissors, title: 'Precision Fades & Beard Work', description: 'Flawless technique every time' },
  { icon: CheckCircle2, title: 'Clean, Modern Shop', description: 'Premium environment, top-tier hygiene' },
  { icon: Users, title: 'Consistent Results, Every Visit', description: 'Quality you can always count on' },
];

const testimonials = [
  { name: 'Marcus T.', text: 'Best fade I\'ve ever had. These guys really know their craft. Been coming here for 2 years now.', rating: 5 },
  { name: 'David R.', text: 'Clean shop, professional barbers, and always on time. Impact Cuts is the only shop I trust.', rating: 5 },
  { name: 'James L.', text: 'Finally found a barber who understands what I want. The attention to detail is unmatched.', rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up">
              <span className="text-foreground">Precision Cuts.</span>
              <br />
              <span className="text-gradient-gold">Real Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Premium grooming for men who take their image seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl">
                Book Appointment
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex items-center gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground font-body">
                <span className="text-foreground font-semibold">500+</span> 5-star reviews
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Impact Cuts */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why <span className="text-gradient-gold">Impact Cuts</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              More than just a haircut—we deliver an experience built on skill, consistency, and premium service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-8 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              From classic cuts to modern styles, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Clients <span className="text-gradient-gold">Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground font-body text-lg">
              Trusted by hundreds of clients in Frisco and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="p-8 rounded-xl card-gradient border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-body text-base mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-heading text-lg">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready for a cut that makes an <span className="text-gradient-gold">impact</span>?
            </h2>
            <p className="text-muted-foreground font-body text-xl mb-10">
              Book your appointment today and experience the difference.
            </p>
            <Button variant="hero" size="xl">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
