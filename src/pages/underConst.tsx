import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        This app is under construction!
      </h1>
      <p className="text-xl text-gray-600 mb-4">
        In the meantime, please use our other channels:
      </p>

      <div className="w-full max-w-xs space-y-3 mb-6">
        <Button
          className="w-full bg-comm-blue hover:bg-comm-blue-light"
          onClick={() =>
            window.open("https://ankuaru.awakilo.com/home", "_blank")
          }
        >
          Visit Website <ArrowRight className="ml-1 h-4 w-4" />
        </Button>

        <Button
          className="w-full border-2 border-[#0088cc] bg-[#0088cc] hover:bg-[#0077b5] text-white"
          onClick={() => window.open("https://t.me/AnkuaruCommunity", "_blank")}
        >
          Join Telegram Group
        </Button>
      </div>

      <Button
        variant="outline"
        onClick={() => window.history.back()}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
    </div>
  );
};

export default UnderConstructionPage;
