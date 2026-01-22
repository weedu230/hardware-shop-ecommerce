// Hardware Store Product Data - 500+ Items

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  price: number;
}

// Category-based placeholder images from picsum with hardware-themed seeds
const categoryImages: Record<string, string> = {
  fasteners: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
  "hand-tools": "https://images.unsplash.com/photo-1581147036324-c17ac41f3e6d?w=400&h=400&fit=crop",
  "power-tools": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop",
  "building-materials": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  plumbing: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=400&fit=crop",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
  paint: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop",
  safety: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
  measuring: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
  "doors-fittings": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
  "metal-fabrication": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=400&fit=crop",
  adhesives: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
  garden: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
  flooring: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  "windows-glass": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
  miscellaneous: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop",
};

// Price ranges per category (in PKR)
const priceRanges: Record<string, [number, number]> = {
  fasteners: [10, 500],
  "hand-tools": [200, 5000],
  "power-tools": [3000, 50000],
  "building-materials": [100, 3000],
  plumbing: [50, 8000],
  electrical: [30, 15000],
  paint: [100, 5000],
  safety: [200, 10000],
  measuring: [150, 8000],
  "doors-fittings": [100, 5000],
  "metal-fabrication": [500, 20000],
  adhesives: [50, 2000],
  garden: [300, 8000],
  flooring: [200, 5000],
  "windows-glass": [500, 15000],
  miscellaneous: [50, 5000],
};

const generatePrice = (categorySlug: string, index: number): number => {
  const [min, max] = priceRanges[categorySlug] || [100, 1000];
  const seed = index * 17 + categorySlug.length;
  return Math.round((min + (seed % (max - min))) / 10) * 10;
};

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  itemCount: number;
}

export const categories: Category[] = [
  {
    id: "fasteners",
    name: "Fasteners & Fixings",
    slug: "fasteners",
    icon: "🔩",
    description: "Nails, screws, bolts, nuts, washers and anchors",
    itemCount: 80,
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    slug: "hand-tools",
    icon: "🔨",
    description: "Hammers, screwdrivers, wrenches, pliers and saws",
    itemCount: 65,
  },
  {
    id: "power-tools",
    name: "Power Tools",
    slug: "power-tools",
    icon: "⚙️",
    description: "Drills, grinders, saws, sanders and welding machines",
    itemCount: 25,
  },
  {
    id: "building-materials",
    name: "Building Materials",
    slug: "building-materials",
    icon: "🧱",
    description: "Cement, bricks, boards, timber and sheets",
    itemCount: 20,
  },
  {
    id: "plumbing",
    name: "Plumbing Items",
    slug: "plumbing",
    icon: "🚰",
    description: "Pipes, valves, fittings, taps and sanitary items",
    itemCount: 60,
  },
  {
    id: "electrical",
    name: "Electrical Items",
    slug: "electrical",
    icon: "⚡",
    description: "Wires, switches, sockets, lights and panels",
    itemCount: 60,
  },
  {
    id: "paint",
    name: "Paint & Finishing",
    slug: "paint",
    icon: "🎨",
    description: "Paints, primers, brushes and finishing materials",
    itemCount: 20,
  },
  {
    id: "safety",
    name: "Safety & Accessories",
    slug: "safety",
    icon: "🪜",
    description: "Safety gear, ladders, measuring tools and protective equipment",
    itemCount: 25,
  },
  {
    id: "measuring",
    name: "Measuring & Marking",
    slug: "measuring",
    icon: "📏",
    description: "Rulers, squares, levels and precision instruments",
    itemCount: 15,
  },
  {
    id: "doors-fittings",
    name: "Doors & Fittings",
    slug: "doors-fittings",
    icon: "🚪",
    description: "Hinges, locks, handles and door hardware",
    itemCount: 20,
  },
  {
    id: "metal-fabrication",
    name: "Metal & Fabrication",
    slug: "metal-fabrication",
    icon: "🪛",
    description: "Steel bars, sheets, welding supplies and clamps",
    itemCount: 20,
  },
  {
    id: "adhesives",
    name: "Adhesives & Chemicals",
    slug: "adhesives",
    icon: "🧴",
    description: "Glues, sealants, lubricants and cleaning chemicals",
    itemCount: 15,
  },
  {
    id: "garden",
    name: "Garden & Outdoor",
    slug: "garden",
    icon: "🌿",
    description: "Shovels, hoses, sprinklers and garden tools",
    itemCount: 15,
  },
  {
    id: "flooring",
    name: "Flooring & Tiles",
    slug: "flooring",
    icon: "🧱",
    description: "Tiles, adhesives, grout and tile tools",
    itemCount: 12,
  },
  {
    id: "windows-glass",
    name: "Windows & Glass",
    slug: "windows-glass",
    icon: "🪟",
    description: "Glass sheets, frames, fittings and mosquito nets",
    itemCount: 12,
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    slug: "miscellaneous",
    icon: "🧹",
    description: "Ropes, tapes, buckets, chains and general items",
    itemCount: 36,
  },
];

const productsByCategory: Record<string, string[]> = {
  fasteners: [
    "Nails (Steel)", "Nails (Concrete)", "Nails (Brass)", "Screws (Wood)", "Screws (Metal)",
    "Screws (Self-tapping)", "Screws (Drywall)", "Screws (Chipboard)", "Bolts (Hex)", "Bolts (Carriage)",
    "Bolts (Anchor)", "Nuts (Hex)", "Nuts (Lock)", "Washers (Flat)", "Washers (Spring)",
    "Wall Plugs", "Rawl Bolts", "Threaded Rods", "U-bolts", "Eye Bolts",
    "Hook Screws", "Toggle Bolts", "Rivets", "Cotter Pins", "Split Pins",
    "Dowel Pins", "Expansion Bolts", "Masonry Anchors", "Chemical Anchors", "Stud Bolts",
    "Concrete Screws", "Machine Screws", "Pan Head Screws", "Countersunk Screws", "Socket Head Screws",
    "Button Head Screws", "Wing Nuts", "Cap Nuts", "Square Nuts", "Fender Washers",
    "Star Washers", "Tooth Washers", "Belleville Washers", "Shoulder Bolts", "T-bolts",
    "J-bolts", "L-bolts", "Hanger Bolts", "Speed Nuts", "Cage Nuts",
    "Clip Nuts", "Spring Clips", "Retaining Rings", "Circlips (Internal)", "Circlips (External)",
    "Snap Rings", "Safety Wire", "Tie Wire", "Galvanized Nails", "Roofing Nails",
    "Finishing Nails", "Brad Nails", "Pin Nails", "Drive Pins", "Hammer Drive Anchors",
    "Drop-in Anchors", "Sleeve Anchors", "Wedge Anchors", "Eye Nuts", "Turnbuckles",
    "Shackles", "D-shackles", "Bow Shackles", "Chain Links", "Quick Links",
    "Lifting Hooks", "S-hooks", "Clevis Pins", "Hitch Pins", "Roll Pins",
  ],
  "hand-tools": [
    "Claw Hammer", "Ball Peen Hammer", "Sledge Hammer", "Rubber Mallet", "Wooden Mallet",
    "Flat Screwdriver", "Phillips Screwdriver", "Torx Screwdriver", "Precision Screwdriver Set", "Adjustable Wrench",
    "Open-end Spanner", "Ring Spanner", "Combination Spanner", "Pipe Wrench", "Allen Key Set",
    "Pliers", "Long Nose Pliers", "Combination Pliers", "Cutting Pliers", "Locking Pliers (Vice Grip)",
    "Wire Stripper", "Crimping Tool", "Hacksaw", "Junior Hacksaw", "Hand Saw (Wood)",
    "Coping Saw", "Bow Saw", "Chisel (Wood)", "Chisel (Cold)", "Punch Set",
    "Hand Plane", "Block Plane", "Wood Rasp", "Metal File (Flat)", "Metal File (Round)",
    "Metal File (Half-round)", "Needle File Set", "Deburring Tool", "Tap Wrench", "Die Stock",
    "Tap Set", "Die Set", "Thread Gauge", "Feeler Gauge", "Center Punch",
    "Automatic Center Punch", "Marking Gauge", "Bevel Gauge", "Hand Riveter", "Rivet Gun",
    "Grease Gun (Manual)", "Grease Gun (Pneumatic)", "Oil Filter Wrench", "Strap Wrench", "Torque Wrench",
    "Ratchet Handle", "Socket Set", "Deep Sockets", "Extension Bar", "Universal Joint Socket",
    "Breaker Bar", "Pry Bar", "Crowbar", "Nail Set", "Hand Reamer",
  ],
  "power-tools": [
    "Electric Drill", "Hammer Drill", "Impact Driver", "Angle Grinder", "Cut-off Machine",
    "Circular Saw", "Jigsaw", "Reciprocating Saw", "Belt Sander", "Orbital Sander",
    "Heat Gun", "Electric Planer", "Router Machine", "Bench Grinder", "Polishing Machine",
    "Welding Machine", "Inverter Welder", "Soldering Iron", "Glue Gun", "Air Compressor",
    "Bench Anvil", "Welding Clamps", "Magnetic Square", "Solder Sucker", "Desoldering Wick",
  ],
  "building-materials": [
    "Cement", "White Cement", "Sand", "Crush Stone", "Gravel",
    "Bricks", "Concrete Blocks", "Fly Ash Blocks", "Lime", "Plaster of Paris",
    "Gypsum Board", "Fiber Cement Board", "Plywood Sheet", "MDF Board", "Particle Board",
    "Hardboard", "Wooden Planks", "Timber Beams", "PVC Sheets", "Acrylic Sheets",
  ],
  plumbing: [
    "PVC Pipes", "UPVC Pipes", "GI Pipes", "CPVC Pipes", "PPR Pipes",
    "HDPE Pipes", "Flexible Hose", "Braided Hose", "Pipe Elbows", "Pipe Tees",
    "Pipe Reducers", "Pipe Couplers", "Pipe Unions", "Ball Valve", "Gate Valve",
    "Check Valve", "Bib Cock", "Angle Valve", "Stop Cock", "Sink Trap",
    "Floor Drain", "Wash Basin", "Kitchen Sink", "Water Tap", "Water Meter",
    "Pipe Saddle", "Pipe Clips", "Pipe Hangers", "Rubber Pipe Gasket", "Pipe Insulation Foam",
    "Thread Seal Tape", "Pipe Sealant Paste", "Flush Tank", "Flush Valve", "Float Valve",
    "WC Pan", "Urinal Bowl", "Shower Mixer", "Shower Head", "Health Faucet",
    "Basin Mixer", "Sink Mixer", "Bottle Trap", "P-trap", "S-trap",
    "Drum Trap", "Floor Cleanout", "Manhole Cover", "Water Storage Tank", "Submersible Pump",
    "Centrifugal Pump", "Foot Valve", "Non-return Valve", "Pressure Gauge", "Water Pressure Regulator",
    "Solenoid Valve", "Irrigation Valve", "Drip Emitter", "Drip Pipe", "Sprinkler Head",
  ],
  electrical: [
    "Electrical Wire (Single Core)", "Electrical Wire (Multi Core)", "Armored Cable", "Flexible Cable", "Speaker Wire",
    "Telephone Wire", "LAN Cable", "Switch", "Socket", "Plug Top",
    "Extension Board", "Junction Box", "Distribution Board", "MCB", "RCCB",
    "Fuse", "Fuse Holder", "Bulb Holder", "LED Bulb", "Tube Light",
    "LED Panel Light", "Ceiling Rose", "Electric Bell", "Door Bell Switch", "Conduit Pipe",
    "Cable Gland", "Cable Lug", "Busbar", "Earthing Rod", "Earthing Clamp",
    "Earthing Wire", "Surge Protector", "Lightning Arrester", "Energy Meter", "Smart Switch",
    "Smart Socket", "WiFi Relay Module", "Contactor", "Timer Switch", "Push Button Switch",
    "Selector Switch", "Indicator Lamp", "Control Relay", "Power Relay", "Terminal Block",
    "DIN Rail", "Panel Fan", "Cooling Fan", "SMPS Power Supply", "Transformer",
    "Solar Panel", "Solar Charge Controller", "Solar Inverter", "DC Fuse", "DC Isolator",
    "Battery Terminal", "Battery Charger", "UPS", "Emergency Light", "Flood Light",
  ],
  paint: [
    "Wall Paint", "Enamel Paint", "Oil Paint", "Spray Paint", "Primer",
    "Putty", "Wood Polish", "Varnish", "Lacquer", "Thinner",
    "Paint Roller", "Paint Brush (Small)", "Paint Brush (Large)", "Paint Tray", "Sandpaper (Coarse)",
    "Sandpaper (Fine)", "Emery Paper", "Scraper", "Putty Knife", "Caulking Gun",
  ],
  safety: [
    "Safety Helmet", "Safety Gloves", "Safety Goggles", "Face Mask", "Welding Mask",
    "Ear Plugs", "Safety Shoes", "Reflective Vest", "Ladder (Aluminum)", "Ladder (Steel)",
    "Tool Belt", "First Aid Box", "Fire Extinguisher", "Safety Harness", "Knee Pads",
    "Dust Cover", "Apron", "Measuring Tape", "Spirit Level", "Plumb Bob",
    "Heat Shrink Tubing", "Cable Tester", "Voltage Tester", "Clamp Meter", "Infrared Thermometer",
  ],
  measuring: [
    "Steel Ruler", "Try Square", "Combination Square", "Measuring Wheel", "Chalk Line",
    "Marker Pen", "Carpenter Pencil", "Vernier Caliper", "Micrometer", "Angle Finder",
    "Laser Distance Meter", "Moisture Meter", "Stud Sensor", "Laser Level", "Multimeter",
  ],
  "doors-fittings": [
    "Door Hinges", "Cabinet Hinges", "Door Lock", "Padlock", "Door Handle",
    "Door Stopper", "Tower Bolt", "Aldrop", "Latch", "Door Closer",
    "Drawer Slides", "Soft Close Hinges", "Cabinet Handles", "Furniture Locks", "Furniture Legs",
    "Furniture Wheels (Casters)", "Rubber Feet", "Door Peephole", "Door Chain", "Door Viewer",
  ],
  "metal-fabrication": [
    "Mild Steel Angle", "Steel Flat Bar", "Steel Round Bar", "Steel Square Pipe", "Steel Rectangular Pipe",
    "Steel Sheet", "Aluminum Sheet", "Aluminum Angle", "Welding Rods", "Flux",
    "Cutting Discs", "Grinding Discs", "Flap Discs", "Metal Clamps", "C-clamp",
    "Tool Box", "Tool Cabinet", "Workbench", "Bench Vice", "Magnetic Holder",
  ],
  adhesives: [
    "Fevicol", "Epoxy Adhesive", "Super Glue", "Silicone Sealant", "PU Sealant",
    "Thread Locker", "Rust Remover", "Lubricating Oil", "Grease", "WD-40",
    "Nail Puller", "Screw Extractor", "Stud Finder", "Manual Grease Gun", "Oil Can",
  ],
  garden: [
    "Shovel", "Spade", "Hoe", "Rake", "Garden Hose",
    "Hose Connector", "Water Sprinkler", "Pruning Shears", "Axe", "Pickaxe",
    "Curtain Rod Bracket", "Curtain Rod", "Wall Brackets", "Shelf Brackets", "Pegboard",
  ],
  flooring: [
    "Ceramic Tiles", "Porcelain Tiles", "Marble Tiles", "Granite Tiles", "Tile Adhesive",
    "Tile Spacer", "Tile Cutter", "Grout", "Grout Float", "Tile Leveling System",
    "Peg Hooks", "Storage Bins",
  ],
  "windows-glass": [
    "Glass Sheets", "Window Hinges", "Window Lock", "Sliding Rollers", "Mosquito Net",
    "Rubber Beading", "Silicone Rubber", "Aluminum Frame", "UPVC Frame", "Glass Suction Lifter",
    "Plastic Organizers", "Price Tags",
  ],
  miscellaneous: [
    "Bucket", "Plastic Tub", "Rope (Nylon)", "Rope (Jute)", "Chain",
    "Tarpaulin Sheet", "Wire Mesh", "Barbed Wire", "Cable Ties", "Duct Tape",
    "Insulation Tape", "Masking Tape", "Double-sided Tape", "Sponge", "Cleaning Brush",
    "Battery", "Extension Cord", "Solar Light", "Inverter", "Voltage Stabilizer",
    "Cable Clips", "Conduit Bends", "Pipe Wrench Chain", "Hand Drill", "Air Blower",
    "Flashlight", "Headlamp", "Measuring Jug", "Funnel", "Rubber Gasket",
    "O-rings", "Spring", "Bearings", "Barcode Stickers", "Pipe Cutter", "Tube Cutter",
  ],
};

const generateDescription = (name: string, category: string): string => {
  const descriptions: Record<string, string> = {
    fasteners: `Premium quality ${name.toLowerCase()} for reliable fastening. Ideal for construction and DIY projects.`,
    "hand-tools": `Professional grade ${name.toLowerCase()} designed for durability and comfort. Built to last.`,
    "power-tools": `High-performance ${name.toLowerCase()} for efficient work. Industrial quality with safety features.`,
    "building-materials": `Quality ${name.toLowerCase()} for construction projects. Meets industry standards.`,
    plumbing: `Reliable ${name.toLowerCase()} for plumbing installations. Leak-proof and durable.`,
    electrical: `Safe and certified ${name.toLowerCase()} for electrical work. Meets safety standards.`,
    paint: `Premium ${name.toLowerCase()} for professional finish. Long-lasting and easy to apply.`,
    safety: `Essential ${name.toLowerCase()} for workplace safety. Certified protection gear.`,
    measuring: `Precision ${name.toLowerCase()} for accurate measurements. Professional quality.`,
    "doors-fittings": `Heavy-duty ${name.toLowerCase()} for doors and furniture. Smooth operation guaranteed.`,
    "metal-fabrication": `Industrial grade ${name.toLowerCase()} for metal work. High strength materials.`,
    adhesives: `Strong bonding ${name.toLowerCase()} for various materials. Quick setting formula.`,
    garden: `Durable ${name.toLowerCase()} for gardening and outdoor work. Weather resistant.`,
    flooring: `Quality ${name.toLowerCase()} for beautiful floors. Easy installation.`,
    "windows-glass": `Premium ${name.toLowerCase()} for windows and glass work. Crystal clear finish.`,
    miscellaneous: `Versatile ${name.toLowerCase()} for general use. Reliable quality.`,
  };
  return descriptions[category] || `Quality ${name.toLowerCase()} available at competitive prices.`;
};

let productId = 1;

export const products: Product[] = Object.entries(productsByCategory).flatMap(
  ([categorySlug, items]) => {
    const category = categories.find((c) => c.slug === categorySlug);
    return items.map((name, index) => ({
      id: `prod-${productId++}`,
      name,
      category: category?.name || categorySlug,
      categorySlug,
      description: generateDescription(name, categorySlug),
      image: categoryImages[categorySlug] || categoryImages.miscellaneous,
      price: generatePrice(categorySlug, index),
    }));
  }
);

export const featuredProducts = products.slice(0, 12);

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((p) => p.categorySlug === categorySlug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
};
