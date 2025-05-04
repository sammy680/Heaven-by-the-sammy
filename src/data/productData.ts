// src/data/productData.ts
export type Product = {
  id: string;
  title: string;
  descriptionHtml?: string; // Optional HTML description
  description?: string;
  price: string;
  imageSrc: string;
  category: string;
  tags?: string[]; // Optional tags array
}

const dummyProducts = [
  {
    id: "1",
    title: "Classic White T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit.",
    price: "799",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["cotton", "casual", "white"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "2",
    title: "Oversized Hoodie - Black",
    description: "Comfortable oversized hoodie for everyday wear.",
    price: "1499",
    imageSrc: "/images/sample.jpg",
    category: "Unisex",
    tags: ["hoodie", "black", "oversized"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "3",
    title: "Denim Jacket",
    description: "Classic blue denim jacket with button closure.",
    price: "2299",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["denim", "jacket", "blue"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "4",
    title: "Satin Midi Dress",
    description: "Elegant satin dress perfect for parties.",
    price: "1899",
    imageSrc: "/images/sample.jpg",
    category: "Women",
    tags: ["dress", "party", "satin"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "5",
    title: "Graphic Crop Top",
    description: "Trendy crop top with unique graphic print.",
    price: "599",
    imageSrc: "/images/sample.jpg",
    category: "Women",
    tags: ["graphic", "crop top", "casual"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "6",
    title: "Cargo Pants - Olive Green",
    description: "Multi-pocket cargo pants for utility and style.",
    price: "1199",
    imageSrc: "/images/sample.jpg",
    category: "Men",
    tags: ["cargo", "pants", "olive"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "7",
    title: "Faux Leather Handbag",
    description: "Stylish handbag made with premium faux leather.",
    price: "999",
    imageSrc: "/images/sample.jpg",
    category: "Accessories",
    tags: ["bag", "faux leather", "women"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
  {
    id: "8",
    title: "Chunky Sneakers",
    description: "Comfortable sneakers with a bold design.",
    price: "1999",
    imageSrc: "/images/sample.jpg",
    category: "Unisex",
    tags: ["shoes", "sneakers", "chunky"],
    descriptionHtml: "<p> This is <b>HTML</b> description. </p>", // Optional
  },
];

export default dummyProducts;
