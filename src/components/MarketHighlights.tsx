
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

const MarketHighlights = () => {
  const commodityData = [
    { name: "Gold", price: "$1,892.45", change: "+1.2%", trend: "up" },
    { name: "Silver", price: "$23.67", change: "+0.8%", trend: "up" },
    { name: "Copper", price: "$4.15", change: "-0.3%", trend: "down" },
    { name: "Crude Oil", price: "$78.35", change: "+1.5%", trend: "up" },
    { name: "Natural Gas", price: "$2.86", change: "-1.2%", trend: "down" },
    { name: "Coffee", price: "$1.89", change: "+0.7%", trend: "up" },
    { name: "Wheat", price: "$649.25", change: "-0.5%", trend: "down" },
    { name: "Cotton", price: "$0.85", change: "+1.1%", trend: "up" },
  ];

  const currencyData = [
    { name: "USD/EUR", price: "0.92", change: "-0.2%", trend: "down" },
    { name: "USD/GBP", price: "0.78", change: "+0.3%", trend: "up" },
    { name: "USD/JPY", price: "149.23", change: "+0.5%", trend: "up" },
    { name: "USD/CAD", price: "1.37", change: "-0.1%", trend: "down" },
    { name: "USD/AUD", price: "1.52", change: "+0.2%", trend: "up" },
    { name: "USD/CHF", price: "0.89", change: "-0.3%", trend: "down" },
    { name: "USD/CNY", price: "7.17", change: "+0.1%", trend: "up" },
    { name: "USD/INR", price: "83.21", change: "+0.4%", trend: "up" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-comm-blue heading-underline inline-block">Market Highlights</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Stay updated with the latest market trends and pricing information across various commodity and financial markets.
          </p>
        </div>
        
        <Tabs defaultValue="commodities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="commodities">Commodities</TabsTrigger>
            <TabsTrigger value="currencies">Currencies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="commodities" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {commodityData.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      {item.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-comm-blue">{item.price}</span>
                      <span className={`ml-2 text-sm ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {item.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-comm-blue text-comm-blue hover:bg-comm-blue hover:text-white">
                View All Commodity Markets <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="currencies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currencyData.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      {item.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-comm-blue">{item.price}</span>
                      <span className={`ml-2 text-sm ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {item.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-comm-blue text-comm-blue hover:bg-comm-blue hover:text-white">
                View All Currency Markets <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketHighlights;
