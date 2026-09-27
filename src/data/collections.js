import bridalImg from '../assets/rohit_bridal.jpg';
import ringsImg from '../assets/rohit_rings.jpg';
import banglesImg from '../assets/rohit_gold_bangles.jpg';
import everydayImg from '../assets/rohit_everyday.jpg';

export const collectionsData = [
  {
    id: 1,
    title: "Bridal Collection",
    image: bridalImg,
    link: "/collections/bridal",
    gridArea: "col-span-12 md:col-span-7 row-span-2",
    aspectRatio: "aspect-[4/5] md:aspect-[3/4]"
  },
  {
    id: 2,
    title: "Silver & Diamond Rings",
    image: ringsImg,
    link: "/collections/diamond",
    gridArea: "col-span-12 md:col-span-5 row-span-1",
    aspectRatio: "aspect-square"
  },
  {
    id: 3,
    title: "Gold Jewellery",
    image: banglesImg,
    link: "/collections/gold",
    gridArea: "col-span-12 md:col-span-5 row-span-1",
    aspectRatio: "aspect-square"
  },
  {
    id: 4,
    title: "Everyday Elegance",
    image: everydayImg,
    link: "/collections/everyday",
    gridArea: "col-span-12",
    aspectRatio: "aspect-video"
  }
];
