import React from 'react';

export default function SchemaMarkup() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is my business data safe and secure with DukaanSarthi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Security is our top priority. DukaanSarthi encrypts all local databases on your device and provides double backup options. You can link your private Google Drive for automated daily cloud backups, so you never lose your data even if you lose your phone or PC."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the app completely offline without internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! DukaanSarthi is designed with offline-first technology. All core features like billing, inventory updates, and ledger reviews run 100% offline. The next time your device connects to the internet, it seamlessly syncs the data across other logged-in devices."
        }
      },
      {
        "@type": "Question",
        "name": "How is DukaanSarthi different from Vyapaar App?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Vyapaar is a great tool, DukaanSarthi is built on a lighter modern framework, meaning it opens faster, doesn't crash on older devices, and has a much more intuitive modern design. Additionally, our mobile sync is smoother, and we offer more affordable starter plans for smaller shop owners."
        }
      },
      {
        "@type": "Question",
        "name": "Can I import my existing product list from Excel or Vyapaar App?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can. We support one-click spreadsheet imports. Simply download our Excel template, copy-paste your item names, prices, and opening stock levels, and upload it. Within seconds, your entire inventory is loaded."
        }
      },
      {
        "@type": "Question",
        "name": "What printers and hardware does DukaanSarthi support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support standard A4/A5 laser/inkjet printers, all major 2-inch and 3-inch thermal printers (USB, Bluetooth, and Wi-Fi), barcode scanning guns, and even phone cameras as mobile barcode scanners."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DukaanSarthi ERP & Billing Software",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, Windows",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "1599",
      "highPrice": "31999"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2500"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
