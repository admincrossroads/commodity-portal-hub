import React, { useState } from "react";
import { Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "Former commodity trader with 15 years of experience in global markets.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg",
    bio: "Technical expert with background in financial systems and blockchain technology.",
  },
  {
    name: "Elena Rodriguez",
    role: "Market Analysis Director",
    image: "/placeholder.svg",
    bio: "Economist specializing in commodity price forecasting and market trends.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Operations",
    image: "/placeholder.svg",
    bio: "Supply chain specialist with extensive experience in commodity logistics.",
  },
  {
    name: "Aisha Patel",
    role: "Community Manager",
    image: "/placeholder.svg",
    bio: "Expert in building online communities and digital engagement strategies.",
  },
];

const TeamSection = ({ id }: { id?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-comm-blue mb-2">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-comm-gold mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Industry experts committed to transforming commodity markets
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="bg-comm-teal rounded-full p-3 mr-3">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Our Leadership</h3>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="aspect-square bg-gray-100 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h4 className="text-lg font-semibold text-comm-blue">
                        {member.name}
                      </h4>
                      <p className="text-comm-teal font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                    <div className="p-4 border-t border-gray-100 flex justify-center space-x-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-comm-blue"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-comm-blue"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
