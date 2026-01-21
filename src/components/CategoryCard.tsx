import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="block hardware-card group p-6 h-full"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            {category.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {category.description}
            </p>
            <span className="inline-block mt-2 text-xs font-medium text-accent">
              {category.itemCount}+ items
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
