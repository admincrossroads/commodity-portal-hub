
import React from 'react';
import { History } from 'lucide-react';

const HistorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-comm-blue mb-2">Our History</h2>
          <div className="w-20 h-1 bg-comm-gold mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of innovation and growth in the commodity exchange space
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-comm-blue-light"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* 2015 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-comm-blue mb-2">2015</h3>
                  <p className="text-gray-600">CommoExchange was founded with a mission to transform how commodity markets operate through technology and data-driven insights.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-comm-teal rounded-full w-10 h-10 flex items-center justify-center z-10">
                  <History className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* 2018 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-comm-blue mb-2">2018</h3>
                  <p className="text-gray-600">Expanded our services to include real-time market data and tender information, reaching over 5,000 users across 25 countries.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-comm-teal rounded-full w-10 h-10 flex items-center justify-center z-10">
                  <History className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* 2021 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-comm-blue mb-2">2021</h3>
                  <p className="text-gray-600">Launched our community platform, connecting traders, analysts, and industry experts to share knowledge and insights.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-comm-teal rounded-full w-10 h-10 flex items-center justify-center z-10">
                  <History className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* 2023 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-comm-blue mb-2">2023</h3>
                  <p className="text-gray-600">Reached a milestone of 10,000 users and introduced AI-powered market predictions and analysis tools.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-comm-teal rounded-full w-10 h-10 flex items-center justify-center z-10">
                  <History className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
