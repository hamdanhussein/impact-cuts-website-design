import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const services = [
  {
    name: 'Haircut',
    price: 35,
    description: 'Precision cut tailored to your style and face shape',
    features: ['Consultation', 'Precision Cut', 'Style Finish', 'Hot Towel'],
  },
  {
    name: 'Skin Fade',
    price: 40,
    description: 'Clean, seamless fade with expert blending',
    features: ['Consultation', 'Skin Fade', 'Line Up', 'Style Finish'],
    popular: true,
  },
  {
    name: 'Beard Trim',
    price: 25,
    description: 'Sharp lines and perfect shaping for your beard',
    features: ['Beard Shaping', 'Line Up', 'Hot Towel', 'Beard Oil'],
  },
  {
    name: 'Haircut + Beard',
    price: 55,
    description: 'Complete grooming package for the full experience',
    features: ['Full Haircut', 'Beard Trim', 'Line Up', 'Hot Towel', 'Styling'],
    popular: true,
  },
  {
    name: 'Kids Cut',
    price: 25,
    description: 'Stylish cuts for the little ones (12 & under)',
    features: ['Consultation', 'Precision Cut', 'Style Finish'],
  },
  {
    name: 'Design',
    price: 15,
    description: 'Custom hair designs and razor art',
    features: ['Custom Design', 'Razor Art', 'Add to any service'],
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className="text-muted-foreground font-body text-xl">
              Transparent pricing for premium grooming services. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className={`relative p-8 rounded-xl card-gradient border transition-all duration-300 hover-lift ${
                  service.popular ? 'border-primary' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-primary-foreground font-body text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl text-foreground mb-2">{service.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-primary font-heading text-4xl font-bold">${service.price}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mt-3">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? 'gold' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-body text-sm">
              * Prices may vary based on hair length and complexity. Contact us for custom quotes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to look your best?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Book your appointment now and experience the Impact Cuts difference.
            </p>
            <Button variant="hero" size="xl">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
