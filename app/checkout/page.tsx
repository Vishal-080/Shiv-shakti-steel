"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const slots = ["8:00 AM - 12:00 PM", "12:00 PM - 4:00 PM", "4:00 PM - 8:00 PM"];

export default function CheckoutPage() {
  const [pincode, setPincode] = useState("");
  const [slot, setSlot] = useState(slots[0]);
  const [delivery, setDelivery] = useState("Enter a serviceable pincode to calculate freight.");
  const [submitted, setSubmitted] = useState(false);
  const total = 26031;

  function calculateDelivery() {
    if (pincode === "500001") setDelivery("Serviceable. Rs. 450 freight applies to this order.");
    else if (pincode === "100110") setDelivery("Serviceable. Rs. 750 freight applies to this order.");
    else setDelivery("Not yet confirmed. Our sales team will verify this delivery location.");
  }

  function requestOtp(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return <main className="checkout-page"><header className="nav shell"><Link className="brand" href="/"><span className="brand-mark">SS</span><span>SHIV SHAKTI<small>STEEL</small></span></Link><Link className="back-link" href="/products">Back to materials</Link></header><section className="shell checkout-wrap"><div className="checkout-title"><p className="eyebrow"><span /> Secure checkout</p><h1>Site order<br /><em>review.</em></h1><p>Prices are GST-inclusive. Your rate is verified again before payment.</p></div><div className="checkout-grid"><form onSubmit={requestOtp} className="checkout-form"><section><div className="form-heading"><span>01</span><h2>Delivery location</h2></div><div className="form-row"><label>Full name<input required placeholder="Name for delivery" /></label><label>Mobile number<input required inputMode="tel" placeholder="10 digit mobile number" /></label></div><label>Site address<input required placeholder="House / plot / site address" /></label><div className="form-row"><label>Pincode<input value={pincode} onChange={(event) => setPincode(event.target.value)} placeholder="Pincode" inputMode="numeric" /></label><button className="outline-button" type="button" onClick={calculateDelivery}>Check delivery</button></div><p className="delivery-message">{delivery}</p></section><section><div className="form-heading"><span>02</span><h2>Delivery slot</h2></div><div className="slot-list">{slots.map((item) => <button type="button" className={slot === item ? "slot selected" : "slot"} onClick={() => setSlot(item)} key={item}><b>{item}</b><small>{slot === item ? "Selected" : "Available"}</small></button>)}</div></section><section><div className="form-heading"><span>03</span><h2>Verify to place order</h2></div><p className="form-copy">Enter your mobile number or email to receive a one-time verification code. Live OTP delivery will be connected in the backend phase.</p><label>Email or mobile<input required placeholder="name@example.com or mobile number" /></label><label className="consent"><input type="checkbox" required /> <span>I accept the terms, privacy policy, cancellation policy, and consent to order updates.</span></label><button className="place-order" type="submit">Send verification code</button>{submitted && <p className="success-message">Demo verification started. The live OTP provider will be connected with backend credentials.</p>}</section></form><aside className="order-summary"><p className="summary-kicker">ORDER SUMMARY</p><h2>TATA Tiscon 550SD</h2><p>16 mm TMT Bars | 20 pieces</p><div className="summary-lines"><div><span>Material estimate</span><b>Rs. 25,581</b></div><div><span>Freight estimate</span><b>Rs. 450</b></div><div><span>GST</span><b>Included</b></div></div><div className="summary-total"><span>Estimated total</span><strong>Rs. {total.toLocaleString("en-IN")}</strong></div><div className="payment-options"><p>PAY AFTER VERIFICATION</p><span>Razorpay UPI</span><span>PhonePe</span><span>Paytm</span><span>BHIM UPI</span><span>COD above Rs. 10,000</span></div></aside></div></section></main>;
}
