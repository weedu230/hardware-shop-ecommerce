import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";

const Categories = () => {
  const totalProducts = categories.reduce((sum, cat) => sum + cat.itemCount, 0);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="hardware-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">
              Product Categories
            </h1>
            <p className="mt-2 text-primary-foreground/80">
              {categories.length} categories with {totalProducts}+ products
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="hardware-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, i) => (
              <CategoryCard key={category.id} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
