import bridalImg from '../assets/rohit_bridal.jpg';
import ringsImg from '../assets/rohit_rings.jpg';
import banglesImg from '../assets/rohit_gold_bangles.jpg';
import earringsImg from '../assets/rohit_earrings.jpg';
import storefrontImg from '../assets/rohit_storefront.jpg';
import everydayImg from '../assets/rohit_everyday.jpg';
import heroImg from '../assets/rohit_hero.jpg';

export const editorialCollectionsData = [
  // Row 1
  {
    id: 1,
    title: "Bridal Jewellery",
    description: "Ornate pieces created for ceremonies, traditions and unforgettable celebrations.",
    image: bridalImg,
    link: "/collections/bridal",
    gridClass: "col-span-12 lg:col-span-8 row-span-2 aspect-[4/3] lg:aspect-auto"
  },
  {
    id: 2,
    title: "Diamond Necklaces",
    description: "Light, brilliance and precision shaped into timeless forms.",
    image: ringsImg,
    link: "/collections/necklaces",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto"
  },
  {
    id: 3,
    title: "Gold Bangles",
    description: "Enduring warmth, crafted with heritage techniques.",
    image: banglesImg,
    link: "/collections/bangles",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto"
  },
  
  // Row 2
  {
    id: 4,
    title: "Statement Earrings",
    description: "Designed to capture light and frame the face perfectly.",
    image: earringsImg,
    link: "/collections/earrings",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-[4/5] lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 5,
    title: "Elegant Rings",
    description: "Symbols of commitment, milestones and individual style.",
    image: ringsImg,
    link: "/collections/rings",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-[4/5] lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 6,
    title: "Heritage Gold",
    description: "Traditional motifs reimagined for the modern era.",
    image: storefrontImg,
    link: "/collections/heritage",
    gridClass: "col-span-12 lg:col-span-4 row-span-2 aspect-[3/4] lg:aspect-auto lg:h-[1200px]" // Tall vertical
  },

  // Row 3 (taking remaining space if needed, or structured around Row 2's span)
  // Actually, to make CSS Grid masonry-like without complex masonry, we use auto-rows and explicit spans.
  // Let's refine grid spans for CSS Grid.
  // We have a 12-column grid.
  // Item 6 is tall (row-span-2). So we need Items 7 & 8 to fill the remaining space beside it.
  
  {
    id: 7,
    title: "Everyday Jewellery",
    description: "Minimalist designs intended to be worn and loved daily.",
    image: everydayImg,
    link: "/collections/everyday",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 8,
    title: "Celebration Jewellery",
    description: "Extravagant creations that commemorate life's biggest moments.",
    image: heroImg,
    link: "/collections/celebration",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto lg:h-[600px]"
  }
];
