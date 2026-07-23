"use client";

import { FormEvent, useState } from "react";
import { brands, categories, diameters } from "./data/quote-data";

type Unit = "kg" | "pieces";

const formatMoney = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

export default function Home() {
  const [unit, setUnit] = useState<Unit>("kg");
  const [quantity, setQuantity] = useState("1000");
  const [diameter, setDiameter] = useState(16);
  const [showQuotes, setShowQuotes] = useState(false);
  const [pincode, setPincode] = useState("");
  const [notice, setNotice] = useState("");

  const amount = Number(quantity) || 0;
  const standardWeight = brands[0].weight;
  const estimatedPieces = unit === "kg" ? amount / standardWeight : amount;
  const estimatedKg = unit === "kg" ? amount : amount * standardWeight;

  function generateQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (amount <= 0) return;
    setShowQuotes(true);
    window.setTimeout(() => document.getElementById("quotes")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  function checkDelivery() {
    if (pincode === "500001") setNotice("Delivery available. Free above Rs. 25,000; otherwise Rs. 450 freight.");
    else if (pincode === "100110") setNotice("Delivery available. Free above Rs. 35,000; otherwise Rs. 750 freight.");
    else setNotice("This pincode needs a delivery confirmation. Our sales desk will help you shortly.");
  }

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Shiv Shakti Steel home"><span className="brand-mark">SS</span><span>SHIV SHAKTI<small>STEEL</small></span></a>
        <nav aria-label="Primary navigation"><a href="#products">Products</a><a href="#why-us">Why us</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#quote">Get a quote <span>+</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Jaipur&apos;s construction material desk</p>
            <h1>Build on <em>certainty.</em><br />Not market guesswork.</h1>
            <p className="lede">Compare live TMT rates across trusted brands in seconds. Official billing. Clear delivery. No calls to chase.</p>
            <div className="hero-proof"><div><strong>7</strong><span>brands compared</span></div><div><strong>GST</strong><span>ready billing</span></div><div><strong>1 day</strong><span>fast delivery slots</span></div></div>
          </div>

          <form className="quote-panel" id="quote" onSubmit={generateQuote}>
            <div className="panel-top"><p>LIVE TMT ESTIMATOR</p><span className="live-dot">Rates active</span></div>
            <h2>Get the right steel<br />at the right rate.</h2>
            <div className="unit-toggle" role="tablist" aria-label="Quantity unit">
              <button type="button" onClick={() => setUnit("kg")} className={unit === "kg" ? "active" : ""}>Quantity in kg</button>
              <button type="button" onClick={() => setUnit("pieces")} className={unit === "pieces" ? "active" : ""}>Quantity in pieces</button>
            </div>
            <label className="field-label" htmlFor="quantity">{unit === "kg" ? "How many kilograms?" : "How many pieces?"}</label>
            <div className="quantity-field"><input id="quantity" type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} /><span>{unit === "kg" ? "KG" : "PCS"}</span></div>
            <label className="field-label" htmlFor="diameter">Bar diameter</label>
            <select id="diameter" value={diameter} onChange={(event) => setDiameter(Number(event.target.value))}>{diameters.map((item) => <option value={item} key={item}>{item} mm</option>)}</select>
            <p className="conversion">Approx. <b>{estimatedPieces.toFixed(0)} pieces</b> | <b>{estimatedKg.toFixed(0)} kg</b> based on standard weight.</p>
            <button className="generate" type="submit">Generate my comparison <span>arrow</span></button>
            <p className="panel-note">No login required to compare. Rates include GST.</p>
          </form>
        </div>
        <div className="steel-lines" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <section className="ticker"><div><span>DAILY RATES</span><b>TMT BARS</b><b>CEMENT</b><b>WIRE</b><b>COVER BLOCKS</b><span>OFFICIAL INVOICES</span></div></section>

      {showQuotes && <section className="quotes shell" id="quotes">
        <div className="section-head"><div><p className="eyebrow"><span /> Your estimate</p><h2>Seven choices. One clear decision.</h2></div><p>16 mm TMT | {estimatedKg.toFixed(0)} kg estimated<br />Prices updated today, GST included.</p></div>
        <div className="quote-grid">
          {brands.map((brand, index) => {
            const total = estimatedKg * brand.rate;
            return <article className={`quote-card ${index === 0 ? "featured" : ""}`} key={brand.name}>
              {index === 0 && <span className="best-pick">Best match</span>}
              <div className="quote-brand"><span className="brand-circle" style={{ background: brand.color }}>{brand.mark}</span><div><h3>{brand.name}</h3><p>{brand.quality}</p></div></div>
              <p className="quote-rate">{formatMoney(brand.rate)} <small>/ kg</small></p>
              <div className="quote-meta"><span>{brand.weight} kg / 16 mm piece</span><span className={brand.stock === "Ready stock" ? "stock good" : "stock"}>{brand.stock}</span></div>
              <p className="offer">{brand.offer}</p>
              <div className="quote-total"><span>Estimated total</span><strong>{formatMoney(total)}</strong></div>
              <button type="button" onClick={() => setNotice(`${brand.name} selected. Continue to checkout to reserve this rate.`)}>Select this brand</button>
            </article>;
          })}
        </div>
        <p className="fine-print">Quote based on configured standard weight. Final invoice is generated after order review. Price refreshes when admin publishes a new rate.</p>
      </section>}

      <section className="delivery shell">
        <div><p className="eyebrow"><span /> Delivery check</p><h2>Know your delivery<br />before you buy.</h2><p>Enter your pincode to see whether we serve your site and the applicable freight rule.</p></div>
        <div className="delivery-box"><label htmlFor="pincode">Site pincode</label><div><input id="pincode" inputMode="numeric" maxLength={6} placeholder="Enter pincode" value={pincode} onChange={(event) => setPincode(event.target.value)} /><button type="button" onClick={checkDelivery}>Check</button></div>{notice && <p className="delivery-result">{notice}</p>}<small>Delivery slots: 8am-12pm | 12pm-4pm | 4pm-8pm</small></div>
      </section>

      <section className="products shell" id="products"><div className="section-head"><div><p className="eyebrow"><span /> Material desk</p><h2>Everything that holds<br />your project together.</h2></div><a href="#contact">Explore all materials</a></div><div className="category-grid">{categories.map((category, index) => <article key={category.name} className={`category category-${index}`}><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.detail}</p><b>{category.tag}</b><i aria-hidden="true" /></article>)}</div></section>

      <section className="why" id="why-us"><div className="shell why-grid"><div><p className="eyebrow"><span /> The Shiv Shakti standard</p><h2>Built for how<br />sites actually run.</h2></div><div className="reasons"><article><b>01</b><div><h3>Rates you can act on</h3><p>Admin-published rates are visible immediately, so your team can decide without waiting for a callback.</p></div></article><article><b>02</b><div><h3>Brands side by side</h3><p>Compare quality position, stock, offer and final estimated amount in one practical view.</p></div></article><article><b>03</b><div><h3>Official, every time</h3><p>GST-inclusive pricing, compliant invoice records and a clear order trail for every purchase.</p></div></article></div></div></section>

      <footer id="contact"><div className="shell footer-grid"><div><a className="brand" href="#top"><span className="brand-mark">SS</span><span>SHIV SHAKTI<small>STEEL</small></span></a><p>Your reliable construction material partner in Jaipur.</p></div><div><p className="footer-label">Visit us</p><p>K No. 166/2, Shop No. 01<br />Near Petrol Pump, Saipura<br />Jaipur 302029</p></div><div><p className="footer-label">Talk to us</p><a href="tel:9998887776">+91 99988 87776</a><a href="mailto:johndeo@shivshaktisteel.com">johndeo@shivshaktisteel.com</a></div><div><p className="footer-label">Policies</p><a href="#">Delivery policy</a><a href="#">Terms & conditions</a><a href="#">Privacy policy</a></div></div><div className="shell copyright">(c) 2026 Shiv Shakti Steel. All rates shown include GST.</div></footer>
    </main>
  );
}
