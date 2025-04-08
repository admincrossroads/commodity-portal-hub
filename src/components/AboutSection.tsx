
import React from 'react';
import { Book } from 'lucide-react';

const AboutSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-comm-blue mb-2">About Us</h2>
          <div className="w-20 h-1 bg-comm-gold mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering commodity market participants with comprehensive data, tools, and insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-comm-blue mb-4">Your Gateway to Global Commodity Markets</h3>
            <p className="text-gray-600 mb-6">
              CommoExchange was founded with a vision to democratize access to commodity market information and create a platform where traders, buyers, and sellers could connect seamlessly.
            </p>
            <p className="text-gray-600 mb-6">
              Our platform aggregates real-time data from multiple sources, providing you with the most accurate and timely information to make informed decisions in the fast-moving commodity markets.
            </p>
            <div className="flex items-center">
              <div className="bg-comm-teal rounded-full p-2 mr-4">
                <Book className="h-6 w-6 text-white" />
              </div>
              <p className="font-medium">Trusted by over 10,000 commodity professionals worldwide</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="CommoExchange Platform" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
