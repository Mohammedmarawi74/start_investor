const fs = require('fs');
const path = require('path');

const DISCOVERY_MAPPING = [
  {
    category: "Advertising & Marketing",
    sectors: [
      { label: "Advertising", id: "advertising-dashboard" },
      { label: "Brands & Leaders", id: "brands-leaders-dashboard" },
      { label: "Marketing", id: "marketing-dashboard" },
      { label: "Influencer Marketing", id: "influencer-marketing-dashboard" },
      { label: "SEO & Content Marketing", id: "seo-content-marketing" }
    ]
  },
  {
    category: "Agriculture",
    sectors: [
      { label: "Farming", id: "farming-dashboard" },
      { label: "Fisheries & Aquaculture", id: "fisheries-aquaculture-dashboard" },
      { label: "Forestry", id: "forestry-dashboard" },
      { label: "Agricultural Technology (Agritech)", id: "agritech-dashboard" },
      { label: "Seeds & Crop Protection", id: "seeds-crop-protection-dashboard" }
    ]
  },
  {
    category: "Chemicals & Resources",
    sectors: [
      { label: "Chemical Industry", id: "chemical-industry-dashboard" },
      { label: "Fossil Fuels", id: "fossil-fuels-dashboard" },
      { label: "Mining, Metals & Minerals", id: "mining-dashboard" },
      { label: "Petroleum & Refinery", id: "petroleum-refinery-dashboard" },
      { label: "Plastic & Rubber", id: "plastic-rubber-dashboard" },
      { label: "Pulp & Paper", id: "pulp-paper-dashboard" }
    ]
  },
  {
    category: "Construction",
    sectors: [
      { label: "Building Construction", id: "building-construction-dashboard" },
      { label: "Heavy Construction", id: "heavy-construction-dashboard" },
      { label: "Smart Construction & BIM", id: "smart-construction-bim-dashboard" },
      { label: "Modular & Prefabricated Construction", id: "modular-prefab-construction-dashboard" }
    ]
  },
  {
    category: "Consumer Goods & FMCG",
    sectors: [
      { label: "Alcoholic Beverages", id: "alcoholic-beverages-dashboard" },
      { label: "Apparel, Shoes & Fashion", id: "apparel-shoes-dashboard" },
      { label: "Cannabis", id: "cannabis-dashboard" },
      { label: "Cleaning Products", id: "cleaning-products-dashboard" },
      { label: "Cosmetics & Personal Care", id: "cosmetics-personal-care-dashboard" },
      { label: "Food & Nutrition", id: "food-nutrition-dashboard" },
      { label: "Furniture, Furnishings & Household Items", id: "furniture-household-dashboard" },
      { label: "Garden & Patio", id: "garden-patio-dashboard" },
      { label: "Home Improvement", id: "home-improvement-dashboard" },
      { label: "Non-alcoholic Beverages", id: "non-alcoholic-beverages-dashboard" },
      { label: "Pets & Animal Supplies", id: "pet-supplies-dashboard" },
      { label: "Tobacco", id: "tobacco-dashboard" },
      { label: "Toys", id: "toys-dashboard" },
      { label: "Packaged Foods", id: "packaged-foods-dashboard" }
    ]
  },
  {
    category: "E-Commerce",
    sectors: [
      { label: "B2B E-Commerce", id: "b2b-ecommerce-dashboard" },
      { label: "B2C E-Commerce", id: "b2c-ecommerce-dashboard" },
      { label: "C2C E-Commerce", id: "c2c-ecommerce-dashboard" },
      { label: "Digital Shopping Behaviour", id: "digital-shopping-behaviour-dashboard" },
      { label: "Key Figures of E-Commerce", id: "ecommerce-key-figures-dashboard" },
      { label: "Paid Content", id: "paid-content-dashboard" }
    ]
  },
  {
    category: "Economy & Politics",
    sectors: [
      { label: "Economy", id: "economy-dashboard" },
      { label: "International", id: "international-trade-dashboard" },
      { label: "Politics & Government", id: "politics-dashboard" },
      { label: "Public Policy & Economic Strategy", id: "public-policy-economic-strategy-dashboard" },
      { label: "Geopolitical Risk & Global Trade Analysis", id: "geopolitical-risk-global-trade-analysis-dashboard" }
    ]
  },
  {
    category: "Energy & Environment",
    sectors: [
      { label: "Climate and Weather", id: "climate-dashboard" },
      { label: "Emissions", id: "emissions-dashboard" },
      { label: "Energy", id: "energy-dashboard" },
      { label: "Environmental Technology & Greentech", id: "greentech-dashboard" },
      { label: "Waste Management", id: "waste-dashboard" },
      { label: "Water & Wastewater", id: "water-dashboard" },
      { label: "Renewable Energy Infrastructure", id: "renewable-energy-infrastructure-dashboard" },
      { label: "Carbon Capture & Climate Tech", id: "carbon-capture-climate-tech-dashboard" }
    ]
  },
  {
    category: "Finance & Insurance",
    sectors: [
      { label: "Financial Institutions", id: "financial-institutions-dashboard" },
      { label: "Financial Instruments & Investments", id: "investments-dashboard" },
      { label: "Financial Services", id: "financial-services-dashboard" },
      { label: "Insurance", id: "insurance-dashboard" }
    ]
  },
  {
    category: "Health, Pharma & Medtech",
    sectors: [
      { label: "Care & Support", id: "care-support-dashboard" },
      { label: "Health Professionals & Hospitals", id: "hospitals-health-professionals-dashboard" },
      { label: "Health System", id: "health-system-dashboard" },
      { label: "Medical Technology", id: "medical-technology-dashboard" },
      { label: "Pharmaceutical Products & Market", id: "pharma-market-dashboard" },
      { label: "State of Health", id: "state-of-health-dashboard" }
    ]
  },
  {
    category: "Internet",
    sectors: [
      { label: "Communications", id: "communications-dashboard" },
      { label: "Cyber Crime & Security", id: "cyber-crime-security-dashboard" },
      { label: "Demographics & Use", id: "internet-demographics-dashboard" },
      { label: "Mobile Internet & Apps", id: "mobile-internet-apps-dashboard" },
      { label: "Online Search", id: "online-search-dashboard" },
      { label: "Online Video & Entertainment", id: "online-video-entertainment-dashboard" },
      { label: "Reach & Traffic", id: "reach-traffic-dashboard" },
      { label: "Social Media & User-Generated Content", id: "social-media-dashboard" }
    ]
  },
  {
    category: "Life",
    sectors: [
      { label: "Celebrities", id: "celebrities-dashboard" },
      { label: "Family & Friends", id: "family-friends-dashboard" },
      { label: "Love & Sex", id: "love-sex-dashboard" },
      { label: "Personality & Behavior", id: "personality-behavior-dashboard" },
      { label: "Public and religious holidays", id: "holidays-dashboard" },
      { label: "Mental Health & Wellbeing Economy", id: "mental-health-wellbeing-economy-dashboard" },
      { label: "Longevity & Human Performance Industry", id: "longevity-human-performance-dashboard" }
    ]
  },
  {
    category: "Media",
    sectors: [
      { label: "Audio", id: "audio-dashboard" },
      { label: "Books & Publishing", id: "books-publishing-dashboard" },
      { label: "News", id: "news-dashboard" },
      { label: "TV, Video & Film", id: "tv-video-film-dashboard" },
      { label: "Video Gaming & eSports", id: "video-gaming-esports-dashboard" }
    ]
  },
  {
    category: "Metals & Electronics",
    sectors: [
      { label: "Aerospace & Defense Manufacturing", id: "aerospace-defense-dashboard" },
      { label: "Electronics", id: "electronics-dashboard" },
      { label: "Industrial Machinery Manufacturing", id: "industrial-machinery-dashboard" },
      { label: "Metals", id: "metals-dashboard" },
      { label: "Rolling Stock Manufacturing", id: "rolling-stock-dashboard" },
      { label: "Shipbuilding", id: "shipbuilding-dashboard" },
      { label: "Vehicle Manufacturing", id: "vehicle-manufacturing-dashboard" },
      { label: "Semiconductors", id: "semiconductors-dashboard" },
      { label: "Advanced Robotics Manufacturing", id: "advanced-robotics-manufacturing-dashboard" }
    ]
  },
  {
    category: "Real Estate",
    sectors: [
      { label: "Commercial Real Estate", id: "commercial-real-estate-dashboard" },
      { label: "Industrial Real Estate", id: "industrial-real-estate-dashboard" },
      { label: "Mortgages & Financing", id: "mortgages-financing-dashboard" },
      { label: "Property Services", id: "property-services-dashboard" },
      { label: "Residential Real Estate", id: "residential-real-estate-dashboard" },
      { label: "PropTech", id: "proptech-dashboard" },
      { label: "Smart Cities Development", id: "smart-cities-development-dashboard" }
    ]
  },
  {
    category: "Retail & Trade",
    sectors: [
      { label: "DIY Retail", id: "diy-retail-dashboard" },
      { label: "Fashion & Accessories", id: "fashion-accessories-dashboard" },
      { label: "Food & Beverage", id: "food-beverage-retail-dashboard" },
      { label: "Furniture Retail", id: "furniture-retail-dashboard" },
      { label: "General Merchandise", id: "general-merchandise-dashboard" },
      { label: "Health & Hygiene", id: "health-hygiene-dashboard" },
      { label: "International Trade", id: "international-trade-dashboard" },
      { label: "Office Supplies", id: "office-supplies-dashboard" },
      { label: "Private Label", id: "private-label-dashboard" },
      { label: "Retail Technology", id: "retail-technology-dashboard" },
      { label: "Shopping Behavior", id: "shopping-behavior-dashboard" },
      { label: "Sports & Leisure", id: "sports-leisure-retail-dashboard" },
      { label: "Subscriptions & Direct Selling", id: "subscriptions-direct-selling-dashboard" },
      { label: "Supply Chain", id: "supply-chain-dashboard" },
      { label: "Wholesale", id: "wholesale-dashboard" },
      { label: "E-commerce Logistics & Fulfillment", id: "ecommerce-logistics-fulfillment-dashboard" },
      { label: "Omnichannel Retail Systems", id: "omnichannel-retail-systems-dashboard" }
    ]
  },
  {
    category: "Services",
    sectors: [
      { label: "Business Services", id: "business-services-dashboard" },
      { label: "Skilled Labor", id: "skilled-labor-dashboard" },
      { label: "Digital Transformation Consulting", id: "digital-transformation-consulting-dashboard" },
      { label: "BPO", id: "bpo-dashboard" }
    ]
  },
  {
    category: "Society",
    sectors: [
      { label: "Crime & Law Enforcement", id: "crime-law-enforcement-dashboard" },
      { label: "Demographics", id: "demographics-dashboard" },
      { label: "Education & Science", id: "education-science-dashboard" },
      { label: "Geography & Nature", id: "geography-nature-dashboard" },
      { label: "Historical Data", id: "historical-data-dashboard" },
      { label: "Religion", id: "religion-dashboard" },
      { label: "Urban Development & Smart Cities Policy", id: "urban-development-smart-cities-policy-dashboard" },
      { label: "Population Analytics & Demographic Intelligence", id: "population-analytics-demographic-intelligence-dashboard" }
    ]
  },
  {
    category: "Sports & Recreation",
    sectors: [
      { label: "Art & Culture", id: "art-culture-dashboard" },
      { label: "Gambling", id: "gambling-dashboard" },
      { label: "Hobbies", id: "hobbies-dashboard" },
      { label: "Parks & Outdoors", id: "parks-outdoors-dashboard" },
      { label: "Professional Sports", id: "professional-sports-dashboard" },
      { label: "Sports & Fitness", id: "sports-fitness-dashboard" },
      { label: "Wellness & Spas", id: "wellness-spas-dashboard" },
      { label: "Sports Analytics & Performance Tech", id: "sports-analytics-performance-tech-dashboard" },
      { label: "Esports & Competitive Gaming Industry", id: "esports-gaming-industry-dashboard" }
    ]
  },
  {
    category: "Technology & Telecommunications",
    sectors: [
      { label: "Consumer Electronics", id: "consumer-electronics-dashboard" },
      { label: "Hardware", id: "hardware-dashboard" },
      { label: "Household Appliances", id: "household-appliances-dashboard" },
      { label: "IT Services", id: "it-services-dashboard" },
      { label: "Software", id: "software-dashboard" },
      { label: "Telecommunications", id: "telecommunications-dashboard" },
      { label: "Artificial Intelligence", id: "artificial-intelligence-dashboard" },
      { label: "Cloud Services", id: "cloud-services-dashboard" }
    ]
  },
  {
    category: "Transportation & Logistics",
    sectors: [
      { label: "Aviation", id: "aviation-dashboard" },
      { label: "Logistics", id: "logistics-dashboard" },
      { label: "Public Transportation & Mobility Services", id: "public-transport-dashboard" },
      { label: "Rail Transport", id: "rail-transport-dashboard" },
      { label: "Vehicles & Road Traffic", id: "vehicles-road-traffic-dashboard" },
      { label: "Water Transport", id: "water-transport-dashboard" },
      { label: "Autonomous Vehicles", id: "autonomous-vehicles-dashboard" },
      { label: "EV Infrastructure", id: "ev-infrastructure-dashboard" }
    ]
  },
  {
    category: "Travel, Tourism & Hospitality",
    sectors: [
      { label: "Accommodation", id: "accommodation-dashboard" },
      { label: "Business Travel", id: "business-travel-dashboard" },
      { label: "Food & Drink Services", id: "food-drink-services-dashboard" },
      { label: "Leisure Travel", id: "leisure-travel-dashboard" },
      { label: "Medical Tourism", id: "medical-tourism-dashboard" },
      { label: "Travel Technology", id: "travel-technology-dashboard" }
    ]
  }
];

const swotDir = path.join(__dirname, 'swot');

if (!fs.existsSync(swotDir)) {
  fs.mkdirSync(swotDir, { recursive: true });
}

const emptySwotTemplate = {
  description: "",
  strengths: [],
  weaknesses: [],
  opportunities: [],
  threats: [],
  insight: ""
};

DISCOVERY_MAPPING.forEach(cat => {
  const safeFileName = cat.category.replace(/ & /g, '_and_').replace(/ /g, '_').replace(/,/g, '').replace(/-/g, '_');
  const filePath = path.join(swotDir, `${safeFileName}.json`);

  const categoryData = {
    category: cat.category,
    sectors: {}
  };

  cat.sectors.forEach(sector => {
    categoryData.sectors[sector.id] = JSON.parse(JSON.stringify(emptySwotTemplate));
  });

  fs.writeFileSync(filePath, JSON.stringify(categoryData, null, 2), 'utf8');
  console.log(`Created: ${safeFileName}.json (${cat.sectors.length} sectors)`);
});

console.log(`\nSuccessfully created ${DISCOVERY_MAPPING.length} category SWOT template files.`);
