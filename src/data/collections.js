import bridalImg from '../assets/rohit_bridal.jpg';
import ringsImg from '../assets/rohit_rings.jpg';
import banglesImg from '../assets/rohit_gold_bangles.jpg';
import { newCollectionItems } from './newCollection';

export const collectionsData = [
  {
    id: 1,
    title: "Bridal & Royal Chokers",
    image: bridalImg,
    link: "/collections?category=New+Collection",
    gridArea: "col-span-12 md:col-span-7 row-span-2",
    aspectRatio: "aspect-[4/5] md:aspect-[3/4]"
  },
  {
    id: 2,
    title: "Silver & Diamond Creations",
    image: ringsImg,
    link: "/collections?category=Silver",
    gridArea: "col-span-12 md:col-span-5 row-span-1",
    aspectRatio: "aspect-square"
  },
  {
    id: 3,
    title: "22K Heritage Gold",
    image: banglesImg,
    link: "/collections?category=Gold",
    gridArea: "col-span-12 md:col-span-5 row-span-1",
    aspectRatio: "aspect-square"
  },
  {
    id: 4,
    title: "New 2026 Collection (26 Masterpieces)",
    image: newCollectionItems[0]?.image || bridalImg,
    link: "/collections?category=New+Collection",
    gridArea: "col-span-12",
    aspectRatio: "aspect-video md:aspect-[21/9]"
  }
];
