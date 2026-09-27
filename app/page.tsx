"use client";
import { FormEvent, useState } from "react";
export default function Home() {
 const [email,setEmail]=useState(""); const [status,setStatus]=useState<"idle"|"success">("idle");
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!email.trim())return;setStatus("success");}
 return <main className="hero">
  <video className="backgroundVideo" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/hero.mp4" type="video/mp4"/></video>
  <div className="veil"/><div className="grain"/>
  <nav className="nav"><div className="brand"><span className="brandMark">C</span><span>CorsiaPay</span></div><span className="availability"><i/> Coming soon</span></nav>
  <section className="content"><div className="eyebrow"><span>✦</span> THE PAYMENT INFRASTRUCTURE FOR AFRICA</div><h1>Payments without<br/><em>the friction.</em></h1><p className="lead">One modern infrastructure for businesses building the next generation of African commerce.</p>
  {status==="success"?<div className="success"><strong>You’re on the list.</strong><span>We’ll let you know when CorsiaPay is ready.</span></div>:<form className="waitlist" onSubmit={submit}><input aria-label="Email address" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address"/><button type="submit">Get early access <span>↗</span></button></form>}<p className="note">No spam. Just the occasional CorsiaPay update.</p></section>
  <footer className="footer"><span>© 2026 CorsiaPay</span><span>Building from Africa, for Africa.</span></footer>
 </main>;
}