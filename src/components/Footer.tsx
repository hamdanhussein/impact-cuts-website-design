import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold tracking-wider">
                <span className="text-primary">IMPACT</span>
                <span className="text-foreground"> CUTS</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Premium grooming for men who take their image seriously. Precision cuts, real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'Pricing', 'Frisco, TX', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : item === 'Frisco, TX' ? '/frisco' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body text-sm">
                  123 Main Street<br />Frisco, TX 75034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+14695551234" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  (469) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-body text-sm">
                  Mon - Sat: 9AM - 7PM<br />Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-muted-foreground font-body text-sm">
              Check out our latest work on Instagram
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Impact Cuts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/more" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              Privacy Policy
            </Link>
            <Link to="/more" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
