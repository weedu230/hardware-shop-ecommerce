import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="hardware-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Wrench className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display">Usman Hardware</h3>
                <p className="text-xs text-primary-foreground/70">Since 2015</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for quality hardware supplies. Serving retail and wholesale customers across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Categories", path: "/categories" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-display">Top Categories</h4>
            <ul className="space-y-2">
              {["Hand Tools", "Power Tools", "Electrical Items", "Plumbing Items", "Safety Gear"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      to="/categories"
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Shop #12, Main Bazaar,<br />Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+923001234567" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@usmanhardware.pk" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@usmanhardware.pk
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon - Sat: 9AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Usman Hardware. All rights reserved. | Wholesale & Retail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
