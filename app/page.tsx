"use client";
import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); if (!email.trim()) return; setStatus("success"); }
  return (
    <main className="hero">
      <video className="backgroundVideo" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/Hero.mp4" type="video/mp4" /></video>
      <div className="veil" /><div className="grain" />
      <nav className="nav"><div className="brand"><span className="brandMark">C</span><span>CorsiaPay</span></div><span className="availability"><i /> Bientôt disponible</span></nav>
      <section className="content"><div className="eyebrow"><span>✦</span> PAIEMENTS FRACTIONNÉS &amp; VERSEMENTS, SIMPLIFIÉS</div><h1>Arrête de coder la logique de paiement.<br /><em>Lance ton produit.</em></h1><p className="lead">Une seule API pour gérer les paiements fractionnés, les versements et les remboursements sur FedaPay, Kkiapay et MTN MoMo — avec tes propres comptes marchands. Pas besoin d'équipe fintech.</p>
      {status === "success" ? <div className="success"><strong>Tu es sur la liste.</strong><span>On te préviendra dès que CorsiaPay sera prêt.</span></div> : <form className="waitlist" onSubmit={submit}><input aria-label="Adresse email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Entre ton adresse email" /><button type="submit">Accès anticipé <span>↗</span></button></form>}
      <p className="note">Pas de spam. Juste les mises à jour de CorsiaPay.</p></section>
      <footer className="footer"><span>© 2026 CorsiaPay</span><span>Construit depuis l'Afrique, pour l'Afrique.</span></footer>
    </main>
  );
}
