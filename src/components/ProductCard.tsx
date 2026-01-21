import { motion } from "framer-motion";
import { MessageCircle, Package } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const phoneNumber = "923001234567";
  const message = `Hi! I'm interested in: ${product.name}. Please share details.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="hardware-card group overflow-hidden"
    >
      {/* Image Placeholder */}
      <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
        <Package className="w-16 h-16 text-muted-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20BD5A] hover:scale-[1.02]"
        >
          <MessageCircle className="w-4 h-4" />
          Inquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
