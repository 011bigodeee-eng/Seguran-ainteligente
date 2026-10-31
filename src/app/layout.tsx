import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/" } : undefined,
  icons: { icon: "/icon.svg" },
  title: "ORSEGUPS — Segurança Inteligente | Alarmes e Monitoramento",
  description:
    "Tecnologia inteligente, alarmes e monitoramento para proteger o que realmente importa. Conheça a ORSEGUPS e solicite um orçamento pelo WhatsApp.",
  applicationName: "ORSEGUPS",
  openGraph: {
    title: "ORSEGUPS — Sua segurança. Nossa prioridade.",
    description:
      "Alarmes de segurança, monitoramento e proteção 24 horas. Converse com a ORSEGUPS.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1448,
        height: 813,
        alt: "Residência moderna ao anoitecer — imagem ilustrativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORSEGUPS — Segurança Inteligente",
    description: "Tecnologia e proteção para o que realmente importa.",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: process.env.SITE_INDEXABLE === "true",
    follow: process.env.SITE_INDEXABLE === "true",
  }, // Prévia comercial: habilitar após aprovação e definição do domínio.
};
export const viewport: Viewport = {
  themeColor: "#071A36",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
