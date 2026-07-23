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

export const products = [
  { id: "tata-16", category: "TMT Bars", name: "TATA Tiscon 550SD", spec: "16 mm | 12 m bar", price: 68.5, unit: "kg", stock: "In stock", badge: "Premium", tone: "gold" },
  { id: "jindal-16", category: "TMT Bars", name: "Jindal Panther Fe 550D", spec: "16 mm | 12 m bar", price: 66.9, unit: "kg", stock: "In stock", badge: "Premium", tone: "red" },
  { id: "rathi-12", category: "TMT Bars", name: "Rathi Shaktiman 550D", spec: "12 mm | 12 m bar", price: 64.75, unit: "kg", stock: "In stock", badge: "Recommended", tone: "orange" },
  { id: "ambuja-53", category: "Cement", name: "Ambuja PPC Cement", spec: "50 kg bag", price: 410, unit: "bag", stock: "In stock", badge: "Site favourite", tone: "green" },
  { id: "ultratech-53", category: "Cement", name: "UltraTech OPC 53", spec: "50 kg bag", price: 430, unit: "bag", stock: "Low stock", badge: "High strength", tone: "gray" },
  { id: "wire-20", category: "Binding Wire", name: "Super Shakti Binding Wire", spec: "20 kg coil", price: 1420, unit: "coil", stock: "In stock", badge: "Contractor rate", tone: "steel" },
  { id: "mannat-25", category: "Cover Blocks", name: "Mannat Cover Blocks", spec: "25 mm | pack of 100", price: 340, unit: "pack", stock: "In stock", badge: "Site ready", tone: "sand" },
  { id: "modi-40", category: "Cover Blocks", name: "Modi Cover Blocks", spec: "40 mm | pack of 100", price: 390, unit: "pack", stock: "In stock", badge: "Site ready", tone: "sand" },
];
