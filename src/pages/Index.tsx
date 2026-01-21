import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Truck, Shield, Clock, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { featuredProducts, categories } from "@/data/products";

const Index = () => {
  const phoneNumber = "923001234567";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your hardware products.")}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="hardware-container py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                🏪 Serving Since 2015
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-display">
                Your Trusted
                <span className="block text-accent">Hardware Partner</span>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl">
                Quality tools, materials & hardware supplies for professionals and DIY enthusiasts. 
                Wholesale & retail available.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/products"
                  className="hardware-btn-primary"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#25D366] text-[#25D366] bg-transparent transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 md:py-12 border-b border-border bg-background">
        <div className="hardware-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Truck, label: "Fast Delivery", desc: "Across Pakistan" },
              { icon: Shield, label: "Quality Assured", desc: "Genuine Products" },
              { icon: Clock, label: "9AM - 9PM", desc: "Mon - Saturday" },
              { icon: Award, label: "Bulk Orders", desc: "Wholesale Rates" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{item.label}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="hardware-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="hardware-section-title">
                Shop by <span className="hardware-gradient-text">Category</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Browse our extensive collection of hardware products organized by category
              </p>
            </div>
            <Link
              to="/categories"
              className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.slice(0, 6).map((category, i) => (
              <CategoryCard key={category.id} category={category} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-accent font-semibold"
            >
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="hardware-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="hardware-section-title">
                Featured <span className="hardware-gradient-text">Products</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Top quality hardware items for your construction and DIY projects
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="hardware-btn-primary"
            >
              Browse All 500+ Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="hardware-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display mb-4">
              Need Help Finding Products?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Contact us directly on WhatsApp or call us. We're here to help you find the right hardware for your project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#25D366] text-white transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)" }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              
              <a
                href="tel:+923001234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5" />
                +92 300 123 4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
