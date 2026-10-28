import bridalImg from '../assets/rohit_bridal.jpg';
import ringsImg from '../assets/rohit_rings.jpg';
import banglesImg from '../assets/rohit_gold_bangles.jpg';
import earringsImg from '../assets/rohit_earrings.jpg';
import everydayImg from '../assets/rohit_everyday.jpg';
import heroImg from '../assets/rohit_hero.jpg';
import { newCollectionItems } from './newCollection';

export const editorialCollectionsData = [
  // Row 1
  {
    id: 1,
    title: "New 2026 Collection",
    description: "Our newly unveiled royal editions, handcrafted with uncut polki, kundan and certified hallmarked gold.",
    image: newCollectionItems[0]?.image || bridalImg,
    link: "/collections?category=New+Collection",
    gridClass: "col-span-12 lg:col-span-8 row-span-2 aspect-[4/3] lg:aspect-auto"
  },
  {
    id: 2,
    title: "Diamond & Choker Suite",
    description: "Light, brilliance and precision shaped into timeless royal forms.",
    image: newCollectionItems[1]?.image || ringsImg,
    link: "/collections?category=New+Collection",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto"
  },
  {
    id: 3,
    title: "Gold Bangles & Kadas",
    description: "Enduring warmth, crafted with heritage filigree techniques.",
    image: newCollectionItems[4]?.image || banglesImg,
    link: "/collections?category=Gold",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto"
  },
  
  // Row 2
  {
    id: 4,
    title: "Statement Earrings",
    description: "Designed to capture light and frame the face perfectly.",
    image: newCollectionItems[2]?.image || earringsImg,
    link: "/collections?category=Gold",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-[4/5] lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 5,
    title: "Elegant Rings",
    description: "Symbols of commitment, milestones and individual style.",
    image: ringsImg,
    link: "/collections?category=Silver",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-[4/5] lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 6,
    title: "Royal Heritage Haar",
    description: "Traditional Rajputana and Nakshi motifs reimagined for the modern celebration.",
    image: newCollectionItems[3]?.image || bridalImg,
    link: "/collections?category=New+Collection",
    gridClass: "col-span-12 lg:col-span-4 row-span-2 aspect-[3/4] lg:aspect-auto lg:h-[1200px]"
  },

  // Row 3
  {
    id: 7,
    title: "Everyday Jewellery",
    description: "Minimalist designs intended to be worn and loved daily.",
    image: everydayImg,
    link: "/collections?category=Gold",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto lg:h-[600px]"
  },
  {
    id: 8,
    title: "Celebration Masterpieces",
    description: "Extravagant creations that commemorate life's biggest moments.",
    image: newCollectionItems[5]?.image || heroImg,
    link: "/collections?category=New+Collection",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 aspect-square lg:aspect-auto lg:h-[600px]"
  }
];
