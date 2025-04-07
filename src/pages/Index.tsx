
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import MarketHighlights from '@/components/MarketHighlights';
import NewsSection from '@/components/NewsSection';
import TenderHighlights from '@/components/TenderHighlights';
import ChannelsSection from '@/components/ChannelsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CommoExchange - Your Gateway to Global Commodity Markets</title>
        <meta name="description" content="Access real-time market data, exchange rates, business news, and tender information all in one comprehensive platform." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ServiceSection />
          <ChannelsSection id="channels" />
          <MarketHighlights />
          <NewsSection />
          <TenderHighlights />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
