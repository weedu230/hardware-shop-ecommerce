import { motion } from "framer-motion";
import { Award, Users, Package, MapPin, Clock, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const stats = [
    { value: "500+", label: "Products", icon: Package },
    { value: "9+", label: "Years Experience", icon: Clock },
    { value: "1000+", label: "Happy Customers", icon: Users },
    { value: "16", label: "Categories", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We source only genuine, high-quality hardware products from trusted manufacturers.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Our experienced staff can help you find the right products for your specific needs.",
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
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-display leading-tight">
              Building Trust Since
              <span className="text-accent"> 2015</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Usman Hardware is your one-stop shop for quality hardware supplies. 
              We serve both retail and wholesale customers across Pakistan with a 
              commitment to quality and excellent customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="hardware-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground font-display">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20 bg-background">
        <div className="hardware-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="hardware-section-title">
                Our <span className="hardware-gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a small hardware shop in Lahore has grown into a trusted 
                  destination for professionals and DIY enthusiasts alike. Founded in 2015, 
                  Usman Hardware has been committed to providing quality products at competitive prices.
                </p>
                <p>
                  Our journey began with a simple mission: to make quality hardware accessible 
                  to everyone. Today, we stock over 500 products across 16 categories, serving 
                  thousands of customers across Pakistan.
                </p>
                <p>
                  Whether you're a contractor working on a major project or a homeowner doing 
                  repairs, we have the tools and materials you need. Our knowledgeable staff 
                  is always ready to help you find the right product for your needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display mb-2">
                    Usman Hardware
                  </h3>
                  <p className="text-muted-foreground">
                    Quality • Trust • Service
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="hardware-container">
          <div className="text-center mb-12">
            <h2 className="hardware-section-title">
              Our <span className="hardware-gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="hardware-card p-6 md:p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 md:py-20 bg-background">
        <div className="hardware-container">
          <div className="text-center mb-12">
            <h2 className="hardware-section-title">
              Visit <span className="hardware-gradient-text">Our Store</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Come see our products in person
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hardware-card overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
                    <p className="text-muted-foreground">
                      Shop #12, Main Bazaar,<br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 9:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted aspect-video md:aspect-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217887.96803696858!2d74.17411058203123!3d31.482932700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
