import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ChevronDown, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Do I need an appointment?',
    answer: 'Yes, we recommend booking an appointment to ensure availability. Walk-ins are welcome based on availability, but appointments are given priority.',
  },
  {
    question: 'How long does a haircut take?',
    answer: 'A standard haircut takes approximately 30-45 minutes. More complex styles like fades with designs may take up to an hour.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards, debit cards, cash, Apple Pay, and Google Pay.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We ask for at least 2 hours notice for cancellations. Late cancellations may incur a fee of 50% of the service price.',
  },
  {
    question: 'Do you offer services for kids?',
    answer: 'Yes! We offer kids cuts for children 12 and under at a discounted rate. Our barbers are experienced with young clients.',
  },
];

const More = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              More <span className="text-gradient-gold">Info</span>
            </h1>
            <p className="text-muted-foreground font-body text-xl">
              Everything you need to know about Impact Cuts.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl card-gradient border border-border p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                About <span className="text-gradient-gold">Impact Cuts</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Founded in Frisco, Texas, Impact Cuts was born from a simple mission: deliver precision grooming that makes a real difference in how men look and feel.
                </p>
                <p>
                  Our team of skilled barbers brings together years of experience, a passion for the craft, and an unwavering commitment to quality. Every cut is tailored to enhance your unique style and features.
                </p>
                <p>
                  We've built our reputation on consistency, professionalism, and attention to detail. When you leave our chair, you leave with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="rounded-xl card-gradient border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading text-lg text-foreground">{faq.question}</span>
                    <ChevronDown 
                      className={cn(
                        'w-5 h-5 text-primary transition-transform duration-300',
                        openFaq === index && 'rotate-180'
                      )}
                    />
                  </button>
                  <div 
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openFaq === index ? 'max-h-48' : 'max-h-0'
                    )}
                  >
                    <p className="px-6 pb-6 text-muted-foreground font-body">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
              Get In <span className="text-gradient-gold">Touch</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="tel:+14695551234"
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-2">Call Us</h4>
                <p className="text-muted-foreground font-body text-sm">(469) 555-1234</p>
              </a>

              <a 
                href="mailto:hello@impactcuts.com"
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-2">Email Us</h4>
                <p className="text-muted-foreground font-body text-sm">hello@impactcuts.com</p>
              </a>

              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-2">Follow Us</h4>
                <p className="text-muted-foreground font-body text-sm">@impactcuts</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Book?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Schedule your appointment today and experience premium grooming.
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

export default More;
