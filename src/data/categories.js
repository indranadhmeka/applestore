// src/data/categories.js

// 🖼️ Import images from assets
import storeImg from "../assets/image/category/store.jpg";
import macImg from "../assets/image/category/mac.jpg";
import ipadImg from "../assets/image/category/ipad.jpg";
import iphoneImg from "../assets/image/category/iphone.jpg";
import watchImg from "../assets/image/category/watch.jpg";
import airpodsImg from "../assets/image/category/airpods.jpg";
import tvhomeImg from "../assets/image/category/tvhome.jpg";
import entertainmentImg from "../assets/image/category/entertainment.jpg";
import accessoriesImg from "../assets/image/category/accessories.jpg";
import supportImg from "../assets/image/category/support.jpg";

// 🗂️ Category data
export const categories = [
  { name: "Store", path: "/", image: storeImg },
  { name: "Mac", path: "/mac", image: macImg },
  { name: "iPad", path: "/ipad", image: ipadImg },
  { name: "iPhone", path: "/iphone", image: iphoneImg },
  { name: "Watch", path: "/watch", image: watchImg },
  { name: "AirPods", path: "/airpods", image: airpodsImg },
  { name: "TV & Home", path: "/tv-home", image: tvhomeImg },
  { name: "Entertainment", path: "/entertainment", image: entertainmentImg },
  { name: "Accessories", path: "/accessories", image: accessoriesImg },
  { name: "Support", path: "/support", image: supportImg },
];

export default categories;
