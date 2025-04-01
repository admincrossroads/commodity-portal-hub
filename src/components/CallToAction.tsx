
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Transform Your Commodity Trading Experience?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Join thousands of traders and businesses who leverage our platform for market insights, real-time data, and trading opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-comm-gold hover:bg-comm-gold-light text-comm-blue-dark text-lg px-8 py-6 font-medium">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-comm-blue text-lg px-8 py-6 font-medium">
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="space-y-6 md:pl-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-3">What Our Users Say</h3>
              <blockquote className="italic text-gray-200">
                "CommoExchange has revolutionized how we approach commodity market analysis. The real-time data and insightful market trends have been invaluable for our trading decisions."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-comm-teal flex items-center justify-center text-white font-bold">JD</div>
                <div className="ml-3">
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-gray-300">Senior Trader, TradeCorp Inc.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="stat-card bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex-1">
                <div className="text-3xl font-bold text-comm-gold">10K+</div>
                <div className="text-sm text-gray-300">Active Traders</div>
              </div>
              <div className="stat-card bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex-1">
                <div className="text-3xl font-bold text-comm-gold">50+</div>
                <div className="text-sm text-gray-300">Markets Covered</div>
              </div>
              <div className="stat-card bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex-1">
                <div className="text-3xl font-bold text-comm-gold">24/7</div>
                <div className="text-sm text-gray-300">Live Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
