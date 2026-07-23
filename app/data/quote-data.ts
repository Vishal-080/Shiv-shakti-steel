export type BrandQuote = {
  name: string;
  mark: string;
  rate: number;
  weight: number;
  quality: "Premium" | "Recommended" | "Budget Friendly";
  offer: string;
  stock: "Ready stock" | "Limited stock";
  color: string;
};

export const diameters = [6, 8, 10, 12, 16, 18, 20, 25, 32, 40];

export const brands: BrandQuote[] = [
  { name: "TATA Tiscon", mark: "T", rate: 68.5, weight: 19, quality: "Premium", offer: "Free delivery above Rs. 25k", stock: "Ready stock", color: "#f7b718" },
  { name: "Jindal Panther", mark: "JP", rate: 66.9, weight: 18.8, quality: "Premium", offer: "Free binding wire", stock: "Ready stock", color: "#dd4b35" },
  { name: "Rathi", mark: "R", rate: 64.75, weight: 18.9, quality: "Recommended", offer: "Bulk rate available", stock: "Ready stock", color: "#df8d23" },
  { name: "Jindal TMT", mark: "JT", rate: 64.25, weight: 18.7, quality: "Recommended", offer: "Free cover blocks", stock: "Limited stock", color: "#f2a31a" },
  { name: "Elegant", mark: "E", rate: 62.8, weight: 18.6, quality: "Recommended", offer: "Value bundle price", stock: "Ready stock", color: "#197a72" },
  { name: "Essar", mark: "ES", rate: 61.9, weight: 18.7, quality: "Budget Friendly", offer: "Best bulk value", stock: "Ready stock", color: "#c94636" },
  { name: "Govinda", mark: "G", rate: 60.8, weight: 18.5, quality: "Budget Friendly", offer: "Special site rate", stock: "Limited stock", color: "#7d8b30" },
];

export const categories = [
  { name: "TMT Bars", detail: "TMT 500D & 550D", tag: "Live rates" },
  { name: "Cement", detail: "Trusted brands", tag: "Per bag" },
  { name: "Binding Wire", detail: "Super Shakti", tag: "Per coil" },
  { name: "Cover Blocks", detail: "Mannat & Modi", tag: "Site ready" },
];
