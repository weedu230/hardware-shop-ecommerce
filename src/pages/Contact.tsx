import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const phoneNumber = "923001234567";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your hardware products.")}`;

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 123 4567",
      action: "tel:+923001234567",
      actionLabel: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 300 123 4567",
      action: whatsappUrl,
      actionLabel: "Chat Now",
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@usmanhardware.pk",
      action: "mailto:info@usmanhardware.pk",
      actionLabel: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Shop #12, Main Bazaar, Lahore, Pakistan",
      action: "https://maps.google.com/?q=Lahore+Pakistan",
      actionLabel: "Get Directions",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-20">
        <div className="hardware-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-display leading-tight">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Have questions? We're here to help! Reach out to us via WhatsApp, 
              phone, or visit our store.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="hardware-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.action}
                target={item.title === "Address" ? "_blank" : undefined}
                rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`hardware-card p-6 text-center group cursor-pointer ${
                  item.isWhatsApp ? "ring-2 ring-[#25D366]/50" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                    item.isWhatsApp
                      ? "bg-[#25D366]/10 group-hover:bg-[#25D366]"
                      : "bg-accent/10 group-hover:bg-accent"
                  }`}
                >
                  <item.icon
                    className={`w-7 h-7 transition-colors ${
                      item.isWhatsApp
                        ? "text-[#25D366] group-hover:text-white"
                        : "text-accent group-hover:text-accent-foreground"
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.value}</p>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-medium ${
                    item.isWhatsApp ? "text-[#25D366]" : "text-accent"
                  }`}
                >
                  {item.actionLabel}
                  <Send className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours & CTA */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="hardware-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Store Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hardware-card p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground font-display">
                  Business Hours
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { day: "Monday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Tuesday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Wednesday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Friday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
                  { day: "Sunday", hours: "Closed", closed: true },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span
                      className={
                        item.closed ? "text-destructive font-medium" : "text-muted-foreground"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#25D366] rounded-2xl p-6 md:p-8 text-white flex flex-col justify-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8" fill="white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Chat with Us on WhatsApp
              </h2>
              <p className="text-white/90 mb-6">
                Get instant responses to your questions. We're available during business hours 
                to help you find the right products.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-[#25D366] transition-all duration-300 hover:bg-white/90 hover:scale-105 w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 md:py-16 bg-background">
        <div className="hardware-container">
          <div className="text-center mb-8">
            <h2 className="hardware-section-title">
              Find <span className="hardware-gradient-text">Our Store</span>
            </h2>
            <p className="text-muted-foreground">
              Visit us in person at our Lahore location
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hardware-card overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217887.96803696858!2d74.17411058203123!3d31.482932700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
