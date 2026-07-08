import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "DukaanSarthi - Smart ERP & GST Billing Software",
  description: "DukaanSarthi - Smart ERP, Accounting & GST Billing App for Retail, Wholesale & Manufacturing Businesses. Manage inventory, sales, purchases, credit ledger, and reports on mobile and PC.",
  keywords: [
    "ERP",
    "billing software",
    "GST billing",
    "accounting software",
    "inventory management",
    "retail billing",
    "vyapaar app alternative",
    "khata book",
    "invoice generator"
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
