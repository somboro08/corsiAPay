import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CorsiaPay | API de paiements fractionnés et versements pour l'Afrique",
  description: "CorsiaPay gère les paiements fractionnés, les versements et les remboursements sur FedaPay, Kkiapay et MTN MoMo — avec tes propres comptes marchands. Rejoins la liste d'accès anticipé.",
  keywords: ["CorsiaPay", "paiements fractionnés Afrique", "API de versement", "FedaPay", "Kkiapay", "MTN MoMo", "API mobile money", "fintech Afrique"],
  applicationName: "CorsiaPay",
  robots: { index: true, follow: true },
  openGraph: {
    title: "CorsiaPay | API de paiements fractionnés et versements pour l'Afrique",
    description: "Une seule API pour les paiements fractionnés, versements et remboursements sur FedaPay, Kkiapay et MTN MoMo — avec tes propres comptes marchands.",
    type: "website",
    siteName: "CorsiaPay",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CorsiaPay | API de paiements fractionnés et versements pour l'Afrique",
    description: "Une seule API pour les paiements fractionnés, versements et remboursements sur FedaPay, Kkiapay et MTN MoMo.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
