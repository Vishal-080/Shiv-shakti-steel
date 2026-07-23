"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "../data/quote-data";

const formatMoney = (amount: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All materials");
  const [cart, setCart] = useState<string[]>([]);
  const categories = ["All materials", "TMT Bars", "Cement", "Binding Wire", "Cover Blocks"];
  const filtered = activeCategory === "All materials" ? products : products.filter((product) => product.category === activeCategory);

  function addToCart(id: string) {
    setCart((current) => current.includes(id) ? current : [...current, id]);
  }

  return <main className="catalog-page">
    <header className="nav shell"><Link className="brand" href="/"><span className="brand-mark">SS</span><span>SHIV SHAKTI<small>STEEL</small></span></Link><nav><Link href="/products">Products</Link><Link href="/#why-us">Why us</Link><Link href="/#contact">Contact</Link></nav><Link className="nav-cta" href="/checkout">Cart ({cart.length}) <span>+</span></Link></header>
    <section className="catalog-hero"><div className="shell"><p className="eyebrow"><span /> Construction materials</p><h1>Material that<br /><em>moves your site.</em></h1><p>Rates are shown inclusive of GST. Check stock, compare specifications, and add material to your site order.</p></div></section>
    <section className="shell catalog-content"><div className="catalog-toolbar"><div className="filters">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={activeCategory === category ? "selected" : ""}>{category}</button>)}</div><p>{filtered.length} materials available today</p></div><div className="product-grid">{filtered.map((product) => <article className="product-card" key={product.id}><div className={`product-visual ${product.tone}`}><span>{product.category}</span><b>{product.name.split(" ").slice(0, 2).join(" ")}</b><i /></div><div className="product-info"><div><p className="product-badge">{product.badge}</p><h2>{product.name}</h2><p>{product.spec}</p></div><span className={product.stock === "In stock" ? "stock good" : "stock"}>{product.stock}</span></div><div className="product-bottom"><div><strong>{formatMoney(product.price)}</strong><small> / {product.unit}, GST incl.</small></div><button type="button" onClick={() => addToCart(product.id)}>{cart.includes(product.id) ? "Added" : "Add to cart"}</button></div></article>)}</div></section>
    <section className="catalog-callout"><div className="shell"><div><p className="eyebrow"><span /> Need TMT bars?</p><h2>Compare all seven<br />brands before ordering.</h2></div><Link href="/#quote">Generate TMT quote</Link></div></section>
  </main>;
}
