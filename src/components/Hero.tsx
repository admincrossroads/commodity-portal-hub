
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to Global Commodity Markets
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
              Access real-time market data, exchange rates, business news, and tender information all in one comprehensive platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-comm-gold hover:bg-comm-gold-light text-comm-blue-dark text-lg px-8 py-6 font-medium">
                Explore Markets
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-comm-blue text-lg px-8 py-6 font-medium">
                Our Services
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-comm-gold to-comm-teal rounded-lg blur opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-6 border border-white/10 rounded-lg">
                <div className="text-right mb-2">
                  <span className="text-xs text-gray-300">Last updated: Today 10:30 AM</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-comm-gold/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">Au</span>
                      </div>
                      <span className="font-medium">Gold</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$1,892.45</div>
                      <div className="text-green-400 text-sm">+1.2%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-500/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">Ag</span>
                      </div>
                      <span className="font-medium">Silver</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$23.67</div>
                      <div className="text-green-400 text-sm">+0.8%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-comm-teal/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">Cu</span>
                      </div>
                      <span className="font-medium">Copper</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$4.15</div>
                      <div className="text-red-400 text-sm">-0.3%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-900/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">Oi</span>
                      </div>
                      <span className="font-medium">Crude Oil</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$78.35</div>
                      <div className="text-green-400 text-sm">+1.5%</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a href="#" className="inline-flex items-center text-comm-teal-light hover:text-white text-sm font-medium">
                    View All Markets <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
