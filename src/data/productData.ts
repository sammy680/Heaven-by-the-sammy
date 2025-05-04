// src/data/productData.ts
import { Product } from "../types";

const dummyProducts = [
  {
    id: "1",
    title: "Classic White T-Shirt",
    price: "799",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["cotton", "casual", "white"],
    description: "Soft cotton t-shirt with a relaxed fit.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "2",
    title: "Oversized Hoodie - Black",
    price: "1499",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Unisex",
    tags: ["hoodie", "black", "oversized"],
    description: "Comfortable oversized hoodie for everyday wear.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "3",
    title: "Denim Jacket",
    price: "2299",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["denim", "jacket", "blue"],
    description: "Classic blue denim jacket with button closure.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "4",
    title: "Satin Midi Dress",
    price: "1899",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Women",
    tags: ["dress", "party", "satin"],
    description: "Elegant satin dress perfect for parties.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "5",
    title: "Graphic Crop Top",
    price: "599",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Women",
    tags: ["graphic", "crop top", "casual"],
    description: "Trendy crop top with unique graphic print.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "6",
    title: "Cargo Pants - Olive Green",
    price: "1199",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["cargo", "pants", "olive"],
    description: "Multi-pocket cargo pants for utility and style.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "7",
    title: "Faux Leather Handbag",
    price: "999",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Accessories",
    tags: ["bag", "faux leather", "women"],
    description: "Stylish handbag made with premium faux leather.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "8",
    title: "Chunky Sneakers",
    price: "1999",
    image: "/images/sample.jpg",
    imageSrc: "/images/sample.jpg",
    category: "Unisex",
    tags: ["shoes", "sneakers", "chunky"],
    description: "Comfortable sneakers with a bold design.",
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
];

export default dummyProducts;
