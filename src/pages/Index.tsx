import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Coiffeúrshop Bochum | CoiffeúrShop by Fatih</title>
        <meta
          name="description"
          content="Besuche unseren Premium Coiffeúrshop CoiffeúrShop by Fatih in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Coiffeúrshop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum"
        />
        <link rel="canonical" href="https://coiffeurshop-fatih.de" />

        {/* Open Graph */}
        <meta property="og:title" content="CoiffeúrShop by Fatih | Premium Coiffeúrshop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bochum."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coiffeurshop-fatih.de" />
        <meta property="og:image" content="https://coiffeurshop-fatih.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CoiffeúrShop by Fatih | Premium Coiffeúrshop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://coiffeurshop-fatih.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "CoiffeúrShop by Fatih",
            "image": "https://coiffeurshop-fatih.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 123",
              "addressLocality": "Bochum",
              "postalCode": "44787",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4818",
              "longitude": "7.2162"
            },
            "url": "https://coiffeurshop-fatih.de",
            "telephone": "+49 234 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Coiffeúrshop Services",
            "sameAs": [
              "https://www.facebook.com/coiffeurshopfatih",
              "https://www.instagram.com/coiffeurshopfatih"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

