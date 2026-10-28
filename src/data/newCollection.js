// Automatically load all images from 'collection new' folder
const newCollectionModules = import.meta.glob('../assets/collection new/*.{jpeg,jpg,png,webp}', { eager: true });

const titlesAndMaterials = [
  { name: "Royal Kundan & Polki Choker", material: "22K Yellow Gold & Uncut Stones" },
  { name: "Imperial Bridal Necklace Set", material: "22K Gold Antique Finish" },
  { name: "Regal Heritage Jhumka Suite", material: "Handcrafted 22K Gold" },
  { name: "Maharani Statement Haar", material: "Fine Hallmarked Gold" },
  { name: "Artisan Filigree Floral Kada", material: "Solid 22K Gold" },
  { name: "Temple Carved Antique Choker", material: "22K Traditional Nakshi" },
  { name: "Celestial Diamond Solitaire Set", material: "18K Gold & Certified Stones" },
  { name: "Heritage Meenakari Peacock Choker", material: "22K Enamel & Gold" },
  { name: "Classic Royal Bridal Set", material: "22K Bridal Gold" },
  { name: "Intricate Filigree Chandelier Drops", material: "22K Yellow Gold" },
  { name: "Vintage Floral Collar Necklace", material: "22K Heritage Finish" },
  { name: "Emerald Accent Royal Necklace", material: "22K Gold & Precious Stones" },
  { name: "Opulent Polki Bridal Ensemble", material: "22K Gold & Kundan" },
  { name: "Ornate Rajwada Gold Bangle Pair", material: "22K Hallmarked Gold" },
  { name: "Modern Solitaire Silhouette Set", material: "Pure Sterling Silver & Gems" },
  { name: "Kolkata Craftsmanship Gold Necklace", material: "22K Yellow Gold" },
  { name: "Navratna Inspired Heritage Set", material: "22K Gold & Multi-gem" },
  { name: "Dainty Contemporary Pendant Set", material: "18K Fine Gold" },
  { name: "Aesthetic Floral Bridal Nath & Set", material: "22K Handcrafted Gold" },
  { name: "Royal Rajputana Hasli Necklace", material: "22K Yellow Gold" },
  { name: "Traditional Gokhru Gold Bangle", material: "22K Heavy Gold" },
  { name: "Graceful South Temple Pendant Set", material: "22K Temple Gold" },
  { name: "Twinkling Diamond Motif Haar", material: "18K White & Yellow Gold" },
  { name: "Sovereign Heritage Choker Set", material: "22K Traditional Antique Gold" },
  { name: "Majestic Filigree Statement Bangle", material: "22K Carved Gold" },
  { name: "Grand Bridal Masterpiece Suite", material: "22K Hallmarked Mastercraft" }
];

export const newCollectionItems = Object.entries(newCollectionModules).map(([path, module]) => {
  // Extract number from filename (e.g. "collection 14.jpeg" -> 14)
  const match = path.match(/collection\s*(\d+)/i);
  const num = match ? parseInt(match[1], 10) : 1;
  const infoIndex = (num - 1) % titlesAndMaterials.length;
  const info = titlesAndMaterials[infoIndex] || {
    name: `New Collection Piece #${num}`,
    material: "Hallmarked 22K Gold & Craft"
  };

  return {
    id: `new-collection-${num}`,
    num,
    name: `${info.name} #${num}`,
    rawTitle: info.name,
    category: 'New Collection',
    collection: 'New Collection 2026',
    material: info.material,
    image: module.default,
    tag: num <= 6 ? 'New Arrival' : (num % 2 === 0 ? 'Trending' : 'Exclusive')
  };
}).sort((a, b) => a.num - b.num);

export const newCollectionHighlights = newCollectionItems.slice(0, 8);
