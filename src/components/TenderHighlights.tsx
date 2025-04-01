
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowRight, Calendar, DollarSign, Globe } from "lucide-react";

const TenderHighlights = () => {
  const tenders = [
    {
      id: 1,
      title: "Supply of Agricultural Commodities for Regional Distribution",
      organization: "Ministry of Agriculture",
      deadline: "June 30, 2023",
      value: "$1.5M - $2.2M",
      location: "National",
      category: "Agriculture",
      status: "Open"
    },
    {
      id: 2,
      title: "Logistics Services for Bulk Mineral Transport",
      organization: "Global Mining Corp",
      deadline: "July 15, 2023",
      value: "$3.8M - $4.5M",
      location: "International",
      category: "Logistics",
      status: "Open"
    },
    {
      id: 3,
      title: "Energy Resources Trading Platform Development",
      organization: "National Energy Authority",
      deadline: "July 10, 2023",
      value: "$750K - $950K",
      location: "National",
      category: "Technology",
      status: "Open"
    },
    {
      id: 4,
      title: "Coffee Bean Quality Testing Equipment",
      organization: "Coffee Exporters Association",
      deadline: "June 25, 2023",
      value: "$250K - $350K",
      location: "Regional",
      category: "Equipment",
      status: "Closing Soon"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-comm-blue heading-underline inline-block">
              Latest Tender Opportunities
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Browse through the latest tender and procurement opportunities across various industries and regions.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="bg-comm-blue hover:bg-comm-blue-light">
              View All Tenders <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {tenders.map((tender) => (
            <Card key={tender.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-9 p-6">
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-comm-blue mr-2" />
                      <h3 className="text-lg font-semibold text-comm-blue-dark">{tender.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Organization</p>
                        <p className="font-medium">{tender.organization}</p>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-4 w-4 text-gray-500 mt-0.5 mr-1" />
                        <div>
                          <p className="text-sm text-gray-500">Deadline</p>
                          <p className="font-medium">{tender.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="h-4 w-4 text-gray-500 mt-0.5 mr-1" />
                        <div>
                          <p className="text-sm text-gray-500">Estimated Value</p>
                          <p className="font-medium">{tender.value}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe className="h-4 w-4 text-gray-500 mt-0.5 mr-1" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{tender.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-comm-teal text-comm-teal">{tender.category}</Badge>
                      <Badge className={tender.status === "Closing Soon" ? "bg-amber-500" : "bg-emerald-500"}>
                        {tender.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="md:col-span-3 bg-gray-50 p-6 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-100">
                    <Button className="w-full bg-comm-blue hover:bg-comm-blue-light mb-3">
                      View Details
                    </Button>
                    <Button variant="outline" className="w-full border-comm-blue text-comm-blue hover:bg-comm-blue hover:text-white">
                      Express Interest
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenderHighlights;
