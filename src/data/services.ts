export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  applications: string[];
  benefits: string[];
  materials: string[];
  installation: string[];
  maintenance: string[];
  warranty: string;
  image: string;
  heroImage: string;
  gallery: string[];
  priceRange: string;
  category: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    slug: "pigeon-safety-nets",
    description: "Professional pigeon safety nets installation to protect your property from pigeons and other birds. Our high-quality nets prevent birds from entering balconies, windows, and open areas while maintaining ventilation and visibility. Made from durable, UV-resistant materials that last for years.",
    shortDescription: "Professional pigeon safety nets to protect your property from birds",
    features: [
      "UV-resistant and weatherproof material",
      "Transparent - maintains visibility",
      "Durable and long-lasting",
      "Easy to clean and maintain",
      "Custom fit for any area",
      "Professional installation",
      "Child and pet safe",
      "Prevents bird entry completely"
    ],
    applications: [
      "Balconies",
      "Windows",
      "Open areas",
      "Terraces",
      "Ventilation areas",
      "Duct areas",
      "Apartment complexes",
      "Commercial buildings"
    ],
    benefits: [
      "Protects from bird droppings",
      "Prevents health hazards",
      "Maintains cleanliness",
      "Protects property from damage",
      "Maintains ventilation",
      "Long-lasting solution",
      "Affordable protection",
      "Easy maintenance"
    ],
    materials: [
      "High-quality nylon/polyethylene nets",
      "UV-resistant material",
      "Weatherproof coating",
      "Stainless steel mounting clips",
      "Heavy-duty ropes and cables",
      "Rust-proof hardware"
    ],
    installation: [
      "Site assessment",
      "Custom measurement",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Annual maintenance check",
      "Emergency repairs",
      "Hardware maintenance"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/pigeon-safety-nets.png",
    heroImage: "/images/safety-nets/pigeon-safety-nets.png",
    gallery: [
      "/images/safety-nets/pigeon-safety-nets.png"
    ],
    priceRange: "₹15-25 per sq ft",
    category: "Safety Nets",
    popular: true
  },
  {
    id: "mosquito-door-and-window",
    name: "Mosquito Door and Window",
    slug: "mosquito-door-and-window",
    description: "Effective mosquito nets for doors and windows to keep mosquitoes and insects away while allowing fresh air and natural light. Available in various designs including sliding, magnetic, and fixed installations. Perfect for homes, offices, and commercial spaces.",
    shortDescription: "Mosquito nets for doors and windows - keep insects away naturally",
    features: [
      "Multiple installation types: sliding, magnetic, fixed",
      "Fine mesh - blocks mosquitoes completely",
      "Allows fresh air and natural light",
      "Easy to open and close",
      "Durable and long-lasting",
      "Custom fit for any door/window",
      "Easy to clean",
      "Child and pet safe"
    ],
    applications: [
      "Main doors",
      "Bedroom windows",
      "Living room windows",
      "Kitchen windows",
      "Bathroom windows",
      "Office spaces",
      "Commercial buildings",
      "Hospitals and clinics"
    ],
    benefits: [
      "Protection from mosquitoes",
      "Prevents mosquito-borne diseases",
      "Allows ventilation",
      "Natural light passage",
      "Easy to use",
      "Low maintenance",
      "Affordable solution",
      "Long-lasting protection"
    ],
    materials: [
      "Fine mesh fabric (fiberglass/polyester)",
      "Aluminum or steel frames",
      "Magnetic strips (for magnetic doors)",
      "Roller mechanism (for sliding)",
      "Stainless steel hardware",
      "UV-resistant mesh"
    ],
    installation: [
      "Door/window measurement",
      "Frame fabrication",
      "Professional installation",
      "Functionality testing",
      "Quality inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Mesh inspection",
      "Frame maintenance",
      "Hardware lubrication",
      "Annual service check"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/home-solutions/mosquito-door-window.jpg",
    heroImage: "/images/home-solutions/mosquito-door-window.jpg",
    gallery: [
      "/images/home-solutions/mosquito-door-window.jpg"
    ],
    priceRange: "₹80-150 per sq ft",
    category: "Mosquito Nets",
    popular: true
  },
  {
    id: "artificial-grass",
    name: "Artificial Grass",
    slug: "artificial-grass",
    description: "Premium artificial grass installation for lawns, balconies, terraces, and commercial spaces. Our high-quality synthetic grass looks and feels like natural grass but requires zero maintenance. Perfect for areas where natural grass is difficult to maintain.",
    shortDescription: "Premium artificial grass - zero maintenance, always green",
    features: [
      "Looks and feels like natural grass",
      "Zero maintenance required",
      "UV-resistant and weatherproof",
      "Drainage system included",
      "Pet and child friendly",
      "Custom fit for any area",
      "Long-lasting (10+ years)",
      "Water-saving solution"
    ],
    applications: [
      "Residential lawns",
      "Balconies",
      "Terraces",
      "Rooftops",
      "Playgrounds",
      "Commercial spaces",
      "Sports areas",
      "Landscaping projects"
    ],
    benefits: [
      "No watering needed",
      "No mowing required",
      "Always green and fresh",
      "Saves water",
      "Low maintenance cost",
      "Durable and long-lasting",
      "Pet-friendly",
      "Increases property value"
    ],
    materials: [
      "Premium synthetic grass fibers",
      "UV-resistant material",
      "Drainage backing",
      "Shock-absorbing underlay",
      "Installation adhesive",
      "Professional-grade materials"
    ],
    installation: [
      "Site preparation",
      "Base leveling",
      "Drainage setup",
      "Grass installation",
      "Finishing and trimming",
      "Quality inspection"
    ],
    maintenance: [
      "Occasional brushing",
      "Rinse with water",
      "Remove debris",
      "Annual inspection",
      "Minor repairs if needed"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/home-solutions/artificial-grass.png",
    heroImage: "/images/home-solutions/artificial-grass.png",
    gallery: [
      "/images/home-solutions/artificial-grass.png"
    ],
    priceRange: "₹80-150 per sq ft",
    category: "Landscaping",
    popular: true
  },
  {
    id: "invisible-grills",
    name: "Invisible Grills",
    slug: "invisible-grills",
    description: "Premium invisible grills providing maximum security while maintaining unobstructed views. Available in multiple wire thicknesses (2mm, 2.5mm, 3mm, 3.5mm, and 4mm) to suit your specific safety needs. These nearly invisible cables blend seamlessly with modern architecture, protecting your loved ones without compromising your view.",
    shortDescription: "Premium invisible grills - Available in 2mm to 4mm wire sizes",
    features: [
      "Available in 5 wire sizes: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "High-grade stainless steel cables",
      "Nearly invisible - maintains your view",
      "Weather & rust resistant",
      "Professional installation included",
      "Customized to fit any size",
      "10+ years durability",
      "Child & pet safe design"
    ],
    applications: [
      "Residential balconies",
      "Apartment balconies",
      "Windows",
      "High-rise buildings",
      "Modern homes",
      "Commercial spaces",
      "Penthouse terraces",
      "Villa balconies"
    ],
    benefits: [
      "Maximum security protection",
      "Unobstructed views",
      "Modern aesthetic appeal",
      "Child and pet safety",
      "Weather protection",
      "Low maintenance",
      "Long-lasting durability",
      "Value addition to property"
    ],
    materials: [
      "Grade 316 marine-grade stainless steel wires",
      "Wire thickness options: 2mm, 2.5mm, 3mm, 3.5mm, 4mm",
      "High-tensile strength cables",
      "Corrosion-resistant mounting hardware",
      "UV-resistant protective coating",
      "Premium aluminum/steel mounting brackets"
    ],
    installation: [
      "Site assessment and measurement",
      "Custom grill sizing",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning with water",
      "Inspection for wear and tear",
      "Lubrication of moving parts",
      "Annual maintenance check",
      "Emergency repair services"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/safety-nets/invisible-grills.png",
    heroImage: "/images/safety-nets/invisible-grills.png",
    gallery: [
      "/images/safety-nets/invisible-grills.png"
    ],
    priceRange: "₹80-120 per sq ft",
    category: "Invisible Grills",
    popular: true
  },
  {
    id: "cricket-nets",
    name: "Cricket Nets",
    slug: "cricket-nets",
    description: "Professional cricket practice nets for training and practice sessions. Our high-quality nets are designed to withstand powerful shots and provide safe practice environments. Available in various sizes and configurations for individual practice or team training.",
    shortDescription: "Professional cricket practice nets for safe training sessions",
    features: [
      "Heavy-duty netting material",
      "Withstands powerful shots",
      "Multiple size options",
      "Weather-resistant",
      "UV-protected",
      "Easy installation",
      "Long-lasting durability",
      "Professional grade quality"
    ],
    applications: [
      "Cricket practice areas",
      "Sports academies",
      "Schools and colleges",
      "Residential complexes",
      "Sports clubs",
      "Training facilities",
      "Stadiums",
      "Backyard practice areas"
    ],
    benefits: [
      "Safe practice environment",
      "Prevents ball loss",
      "Protects surrounding areas",
      "Durable and long-lasting",
      "Weather-resistant",
      "Easy to maintain",
      "Professional quality",
      "Affordable solution"
    ],
    materials: [
      "Heavy-duty nylon netting",
      "UV-resistant material",
      "Steel poles and frames",
      "Rust-proof hardware",
      "High-tensile ropes",
      "Professional-grade materials"
    ],
    installation: [
      "Site assessment",
      "Custom sizing",
      "Frame installation",
      "Net installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular inspection",
      "Net repair if needed",
      "Frame maintenance",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/sports-nets/cricket-nets.png",
    heroImage: "/images/sports-nets/cricket-nets.png",
    gallery: [
      "/images/sports-nets/cricket-nets.png"
    ],
    priceRange: "₹20-40 per sq ft",
    category: "Sports Nets",
    popular: true
  },
  {
    id: "balcony-grills",
    name: "Balcony Grills",
    slug: "balcony-grills",
    description: "Strong and secure balcony grills for maximum safety and protection. Available in various designs including invisible grills, traditional grills, and modern designs. Our grills provide complete security while maintaining aesthetics and views.",
    shortDescription: "Strong and secure balcony grills for maximum safety",
    features: [
      "Multiple design options",
      "High-strength materials",
      "Custom fit for any balcony",
      "Weather-resistant",
      "Rust-proof construction",
      "Professional installation",
      "Child and pet safe",
      "Long-lasting durability"
    ],
    applications: [
      "Residential balconies",
      "Apartment balconies",
      "High-rise balconies",
      "Penthouse terraces",
      "Duplex balconies",
      "Villa balconies",
      "Commercial balconies",
      "Studio balconies"
    ],
    benefits: [
      "Maximum security",
      "Child and pet protection",
      "Prevents falls",
      "Weather protection",
      "Low maintenance",
      "Aesthetic appeal",
      "Long-lasting",
      "Value addition"
    ],
    materials: [
      "Stainless steel or MS steel",
      "Powder coating",
      "Rust-proof hardware",
      "High-tensile strength",
      "Weather-resistant finish",
      "Professional-grade materials"
    ],
    installation: [
      "Balcony assessment",
      "Custom design",
      "Fabrication",
      "Professional installation",
      "Quality inspection",
      "Safety testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Paint touch-up if needed",
      "Hardware maintenance",
      "Annual service check"
    ],
    warranty: "5 years warranty on materials and workmanship",
    image: "/images/home-solutions/balcony-grills.png",
    heroImage: "/images/home-solutions/balcony-grills.png",
    gallery: [
      "/images/home-solutions/balcony-grills.png"
    ],
    priceRange: "₹70-120 per sq ft",
    category: "Safety Grills",
    popular: true
  },
  {
    id: "top-roofs-waterproof-sheets",
    name: "Top Roofs & Waterproof Sheets",
    slug: "top-roofs-waterproof-sheets",
    description: "Professional roof waterproofing and top sheet installation to protect your property from water leakage and weather damage. Our high-quality waterproofing solutions ensure complete protection from rain, moisture, and weather elements.",
    shortDescription: "Professional roof waterproofing and top sheet installation",
    features: [
      "Complete waterproofing solution",
      "Multiple material options",
      "Weather-resistant",
      "UV-protected",
      "Long-lasting durability",
      "Professional installation",
      "Leak-proof guarantee",
      "Custom fit for any roof"
    ],
    applications: [
      "Residential roofs",
      "Commercial roofs",
      "Terraces",
      "Balconies",
      "Rooftops",
      "Industrial buildings",
      "Apartment complexes",
      "Villa roofs"
    ],
    benefits: [
      "Prevents water leakage",
      "Protects from weather damage",
      "Increases roof lifespan",
      "Energy efficient",
      "Low maintenance",
      "Long-lasting solution",
      "Cost-effective",
      "Property protection"
    ],
    materials: [
      "Waterproofing membranes",
      "Polyurethane coatings",
      "Bituminous sheets",
      "EPDM rubber sheets",
      "PVC sheets",
      "Professional-grade materials"
    ],
    installation: [
      "Roof inspection",
      "Surface preparation",
      "Waterproofing application",
      "Sheet installation",
      "Quality inspection",
      "Leak testing"
    ],
    maintenance: [
      "Regular inspection",
      "Minor repairs if needed",
      "Annual maintenance",
      "Surface cleaning",
      "Coating touch-up"
    ],
    warranty: "5-10 years warranty on materials and workmanship",
    image: "/images/home-solutions/top-roofs-waterproof-sheets.png",
    heroImage: "/images/home-solutions/top-roofs-waterproof-sheets.png",
    gallery: [
      "/images/home-solutions/top-roofs-waterproof-sheets.png"
    ],
    priceRange: "₹50-100 per sq ft",
    category: "Waterproofing",
    popular: true
  },
  {
    id: "cloth-hanger-ceiling-wall-brackets",
    name: "Cloth Hanger for Ceiling and Wall Brackets",
    slug: "cloth-hanger-ceiling-wall-brackets",
    description: "Space-saving cloth hangers for ceiling and wall installation. Available in various sizes (4ft to 8ft) with 3 or 6 rods options. Perfect for balconies, utility areas, and laundry rooms. These hangers maximize your drying space while keeping your area organized.",
    shortDescription: "Space-saving cloth hangers for ceiling and wall - 4ft to 8ft sizes",
    features: [
      "Ceiling and wall mounting options",
      "Sizes: 4ft, 5ft, 6ft, 7ft, 8ft",
      "3 rods or 6 rods configuration",
      "Rust-proof stainless steel",
      "Space-saving design",
      "Easy to use",
      "Professional installation",
      "Long-lasting durability"
    ],
    applications: [
      "Balconies",
      "Utility areas",
      "Laundry rooms",
      "Terraces",
      "Apartment complexes",
      "Residential spaces",
      "Commercial spaces",
      "High-rise buildings"
    ],
    benefits: [
      "Maximizes drying space",
      "Saves floor and wall space",
      "Easy to use",
      "Multiple size options",
      "Low maintenance",
      "Durable construction",
      "Organized look",
      "Affordable solution"
    ],
    materials: [
      "Grade 316 stainless steel",
      "Heavy-duty brackets",
      "Pulley mechanism (for ceiling)",
      "Rust-proof hardware",
      "Weather-resistant coating",
      "Professional-grade materials"
    ],
    installation: [
      "Site assessment",
      "Custom fabrication",
      "Professional installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Cable maintenance",
      "Hardware inspection",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/cloth-hangers/cloth-hanger-for-ceiling.png",
    heroImage: "/images/cloth-hangers/cloth-hanger-for-ceiling.png",
    gallery: [
      "/images/cloth-hangers/cloth-hanger-for-ceiling.png"
    ],
    priceRange: "₹40-70 per sq ft",
    category: "Cloth Hangers",
    popular: true
  },
  {
    id: "wallpapers",
    name: "Wallpapers",
    slug: "wallpapers",
    description: "Premium wallpapers for residential and commercial spaces. Wide range of designs, patterns, and textures to transform your interiors. Our wallpapers are easy to install, durable, and add elegance to any space.",
    shortDescription: "Premium wallpapers for beautiful interior transformation",
    features: [
      "Wide range of designs",
      "Multiple textures and patterns",
      "Easy to install",
      "Durable and long-lasting",
      "Easy to clean",
      "Moisture-resistant options",
      "Custom designs available",
      "Professional installation"
    ],
    applications: [
      "Living rooms",
      "Bedrooms",
      "Offices",
      "Commercial spaces",
      "Hotels",
      "Restaurants",
      "Hospitals",
      "Educational institutions"
    ],
    benefits: [
      "Transforms interior look",
      "Easy to maintain",
      "Hides wall imperfections",
      "Adds elegance",
      "Wide design options",
      "Long-lasting",
      "Cost-effective",
      "Quick installation"
    ],
    materials: [
      "Premium vinyl wallpapers",
      "Fabric wallpapers",
      "Non-woven wallpapers",
      "3D wallpapers",
      "Moisture-resistant materials",
      "Professional-grade adhesives"
    ],
    installation: [
      "Wall preparation",
      "Measurement and cutting",
      "Adhesive application",
      "Professional installation",
      "Finishing touches",
      "Quality inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Minor repairs if needed",
      "Annual inspection",
      "Touch-up if required",
      "Professional maintenance"
    ],
    warranty: "2-5 years warranty on materials and workmanship",
    image: "/images/home-solutions/wallpapers.png",
    heroImage: "/images/home-solutions/wallpapers.png",
    gallery: [
      "/images/home-solutions/wallpapers.png"
    ],
    priceRange: "₹30-100 per sq ft",
    category: "Interior Design",
    popular: false
  },
  {
    id: "construction-safety-nets",
    name: "Construction Safety Nets",
    slug: "construction-safety-nets",
    description: "Heavy-duty construction safety nets for building sites and construction projects. Our nets provide protection from falling debris, tools, and materials, ensuring safety for workers and pedestrians. Compliant with safety standards and regulations.",
    shortDescription: "Heavy-duty construction safety nets for building sites",
    features: [
      "Heavy-duty netting material",
      "Compliant with safety standards",
      "Protects from falling debris",
      "Weather-resistant",
      "UV-protected",
      "Easy installation",
      "Durable construction",
      "Professional grade"
    ],
    applications: [
      "Construction sites",
      "Building projects",
      "Renovation sites",
      "High-rise construction",
      "Industrial projects",
      "Infrastructure projects",
      "Demolition sites",
      "Maintenance work"
    ],
    benefits: [
      "Worker safety",
      "Pedestrian protection",
      "Prevents accidents",
      "Compliance with regulations",
      "Debris containment",
      "Professional appearance",
      "Durable and long-lasting",
      "Cost-effective safety"
    ],
    materials: [
      "Heavy-duty nylon/polyethylene",
      "High-tensile strength",
      "UV-resistant material",
      "Steel mounting hardware",
      "Rust-proof components",
      "Professional-grade materials"
    ],
    installation: [
      "Site assessment",
      "Safety planning",
      "Professional installation",
      "Quality inspection",
      "Safety testing",
      "Regular monitoring"
    ],
    maintenance: [
      "Regular inspection",
      "Damage assessment",
      "Repair or replacement",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "2-3 years warranty on materials and workmanship",
    image: "/images/safety-nets/construction-safety-nets.png",
    heroImage: "/images/safety-nets/construction-safety-nets.png",
    gallery: [
      "/images/safety-nets/construction-safety-nets.png"
    ],
    priceRange: "₹15-30 per sq ft",
    category: "Safety Nets",
    popular: true
  },
  {
    id: "nursery-shade-nets",
    name: "Nursery Shade Nets",
    slug: "nursery-shade-nets",
    description: "Specialized shade nets for nurseries, gardens, and agricultural applications. Our shade nets protect plants from excessive sunlight, reduce temperature, and create optimal growing conditions. Available in various shade percentages.",
    shortDescription: "Specialized shade nets for nurseries and gardens",
    features: [
      "Multiple shade percentages (30%, 50%, 70%, 90%)",
      "UV-resistant material",
      "Weather-resistant",
      "Reduces temperature",
      "Protects plants",
      "Easy installation",
      "Durable construction",
      "Custom sizes available"
    ],
    applications: [
      "Plant nurseries",
      "Gardens",
      "Greenhouses",
      "Agricultural fields",
      "Horticulture",
      "Floriculture",
      "Vegetable farming",
      "Commercial farming"
    ],
    benefits: [
      "Protects from excessive sunlight",
      "Reduces temperature",
      "Prevents plant damage",
      "Optimal growing conditions",
      "Water conservation",
      "Increases yield",
      "Durable and long-lasting",
      "Cost-effective solution"
    ],
    materials: [
      "High-density polyethylene (HDPE)",
      "UV-stabilized material",
      "Weather-resistant coating",
      "Steel or aluminum frames",
      "Rust-proof hardware",
      "Professional-grade materials"
    ],
    installation: [
      "Site assessment",
      "Frame installation",
      "Net installation",
      "Quality inspection",
      "Functionality testing"
    ],
    maintenance: [
      "Regular cleaning",
      "Inspection for damage",
      "Frame maintenance",
      "Annual service",
      "Emergency repairs"
    ],
    warranty: "3-5 years warranty on materials and workmanship",
    image: "/images/gardening/nursery-shade-nets.png",
    heroImage: "/images/gardening/nursery-shade-nets.png",
    gallery: [
      "/images/gardening/nursery-shade-nets.png"
    ],
    priceRange: "₹10-25 per sq ft",
    category: "Agricultural Nets",
    popular: false
  },
  {
    id: "children-safety-nets",
    name: "Children Safety Nets",
    slug: "children-safety-nets",
    description: "Specialized safety nets designed to protect children from falls and accidents. Our nets are installed on balconies, windows, staircases, and play areas to ensure complete safety for children. Made from high-strength materials that can withstand significant weight.",
    shortDescription: "Specialized safety nets to protect children from falls",
    features: [
      "High-strength netting",
      "Child-safe materials",
      "Withstands significant weight",
      "Transparent - maintains visibility",
      "Weather-resistant",
      "Easy installation",
      "Durable construction",
      "Professional installation"
    ],
    applications: [
      "Balconies",
      "Windows",
      "Staircases",
      "Play areas",
      "Terraces",
      "Open areas",
      "Schools",
      "Daycare centers"
    ],
    benefits: [
      "Prevents child falls",
      "Complete safety protection",
      "Peace of mind for parents",
      "Maintains visibility",
      "Weather-resistant",
      "Long-lasting",
      "Easy maintenance",
      "Affordable safety solution"
    ],
    materials: [
      "High-strength nylon/polyethylene",
      "UV-resistant material",
      "Weatherproof coating",
      "Stainless steel hardware",
      "Heavy-duty mounting",
      "Child-safe materials"
    ],
    installation: [
      "Safety assessment",
      "Custom measurement",
      "Professional installation",
      "Safety testing",
      "Quality inspection"
    ],
    maintenance: [
      "Regular inspection",
      "Safety checks",
      "Damage assessment",
      "Annual maintenance",
      "Emergency repairs"
    ],
    warranty: "3 years warranty on materials and workmanship",
    image: "/images/safety-nets/children-safety-nets.png",
    heroImage: "/images/safety-nets/children-safety-nets.png",
    gallery: [
      "/images/safety-nets/children-safety-nets.png"
    ],
    priceRange: "₹20-35 per sq ft",
    category: "Safety Nets",
    popular: true
  },
  {
    id: "folding-aluminium-mosquito-door",
    name: "Folding Aluminium Mosquito Door",
    slug: "folding-aluminium-mosquito-door",
    description: "Modern folding aluminium mosquito doors that provide complete protection from mosquitoes and insects. These doors fold neatly to the side when not in use, saving space. Perfect for main entrances, balconies, and patios. Available in various sizes and designs.",
    shortDescription: "Modern folding aluminium mosquito doors - space-saving design",
    features: [
      "Folding design - saves space",
      "Aluminium frame - lightweight and durable",
      "Fine mesh - blocks all mosquitoes",
      "Smooth folding mechanism",
      "Easy to operate",
      "Weather-resistant",
      "Custom fit for any door",
      "Professional installation"
    ],
    applications: [
      "Main entrances",
      "Balconies",
      "Patios",
      "Verandas",
      "Residential homes",
      "Commercial spaces",
      "Offices",
      "Hospitals"
    ],
    benefits: [
      "Complete mosquito protection",
      "Space-saving design",
      "Easy to use",
      "Durable construction",
      "Low maintenance",
      "Modern appearance",
      "Allows ventilation",
      "Long-lasting"
    ],
    materials: [
      "Aluminium frames",
      "Fine mesh fabric",
      "Folding mechanism",
      "Stainless steel hardware",
      "UV-resistant mesh",
      "Professional-grade materials"
    ],
    installation: [
      "Door measurement",
      "Frame fabrication",
      "Professional installation",
      "Functionality testing",
      "Quality inspection"
    ],
    maintenance: [
      "Regular cleaning",
      "Mesh inspection",
      "Mechanism lubrication",
      "Frame maintenance",
      "Annual service check"
    ],
    warranty: "2 years warranty on materials and workmanship",
    image: "/images/home-solutions/folding-aluminium-mosquito-door.png",
    heroImage: "/images/home-solutions/folding-aluminium-mosquito-door.png",
    gallery: [
      "/images/home-solutions/folding-aluminium-mosquito-door.png"
    ],
    priceRange: "₹150-300 per sq ft",
    category: "Mosquito Nets",
    popular: true
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};
