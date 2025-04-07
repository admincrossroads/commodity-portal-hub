
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Send } from "lucide-react";

const ChannelsSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-comm-blue">Access Our Platform Through Multiple Channels</h2>
          <div className="mt-4 h-1 w-24 bg-comm-gold mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose how you want to interact with our comprehensive commodity exchange platform through our various channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg border-t-4 border-t-comm-blue hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <Globe className="h-12 w-12 text-comm-blue mb-2" />
              <CardTitle className="text-2xl font-bold text-comm-blue">Web Platform</CardTitle>
              <CardDescription className="text-gray-600">
                Our comprehensive web-based platform for desktop access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced market analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time market data visualization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive research tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full trading capabilities</span>
                </li>
              </ul>
              <Button className="w-full bg-comm-blue hover:bg-comm-blue-light">
                Access Web Platform <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-comm-teal hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <Smartphone className="h-12 w-12 text-comm-teal mb-2" />
              <CardTitle className="text-2xl font-bold text-comm-teal">Mobile App</CardTitle>
              <CardDescription className="text-gray-600">
                Take the power of our platform with you on the go
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time price alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile-optimized trading interface</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>News updates and notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portfolio tracking on the go</span>
                </li>
              </ul>
              <div className="flex space-x-2">
                <Button className="flex-1 bg-black hover:bg-gray-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M17.5575 12.825C17.5575 10.8417 19.155 9.60833 19.2133 9.55833C18.1483 8.00833 16.5183 7.79167 15.92 7.75C14.5925 7.61667 13.3067 8.53333 12.6283 8.53333C11.9325 8.53333 10.8675 7.76667 9.74333 7.78333C8.2775 7.8 6.9325 8.63333 6.1825 9.94167C4.6325 12.6 5.8075 16.5333 7.305 18.4833C8.05167 19.4333 8.93333 20.5083 10.0833 20.4667C11.2017 20.425 11.6433 19.7417 12.9783 19.7417C14.2967 19.7417 14.7133 20.4667 15.8825 20.45C17.0858 20.4333 17.855 19.4917 18.5858 18.5333C19.4508 17.4333 19.805 16.35 19.8217 16.2917C19.7883 16.275 17.5525 15.3583 17.5575 12.825Z"/>
                    <path d="M15.4858 6.425C16.1025 5.65833 16.5275 4.625 16.4025 3.575C15.5358 3.61667 14.4525 4.19167 13.8108 4.94167C13.2358 5.60833 12.7275 6.675 12.8692 7.68333C13.8525 7.75833 14.8525 7.175 15.4858 6.425Z"/>
                  </svg>
                  App Store
                </Button>
                <Button className="flex-1 bg-comm-blue hover:bg-comm-blue-light">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M17.5575 12.825C17.5575 10.8417 19.155 9.60833 19.2133 9.55833C18.1483 8.00833 16.5183 7.79167 15.92 7.75C14.5925 7.61667 13.3067 8.53333 12.6283 8.53333C11.9325 8.53333 10.8675 7.76667 9.74333 7.78333C8.2775 7.8 6.9325 8.63333 6.1825 9.94167C4.6325 12.6 5.8075 16.5333 7.305 18.4833C8.05167 19.4333 8.93333 20.5083 10.0833 20.4667C11.2017 20.425 11.6433 19.7417 12.9783 19.7417C14.2967 19.7417 14.7133 20.4667 15.8825 20.45C17.0858 20.4333 17.855 19.4917 18.5858 18.5333C19.4508 17.4333 19.805 16.35 19.8217 16.2917C19.7883 16.275 17.5525 15.3583 17.5575 12.825Z"/>
                    <path d="M15.4858 6.425C16.1025 5.65833 16.5275 4.625 16.4025 3.575C15.5358 3.61667 14.4525 4.19167 13.8108 4.94167C13.2358 5.60833 12.7275 6.675 12.8692 7.68333C13.8525 7.75833 14.8525 7.175 15.4858 6.425Z"/>
                  </svg>
                  Play Store
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-comm-gold hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <Send className="h-12 w-12 text-comm-gold mb-2" />
              <CardTitle className="text-2xl font-bold text-comm-gold-dark">Telegram Channel</CardTitle>
              <CardDescription className="text-gray-600">
                Get instant updates and alerts via our Telegram channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instant market alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Daily market summaries</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Breaking news notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-comm-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community discussions</span>
                </li>
              </ul>
              <Button className="w-full border-2 border-[#0088cc] bg-[#0088cc] hover:bg-[#0077b5] text-white">
                Join Our Telegram Channel <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
