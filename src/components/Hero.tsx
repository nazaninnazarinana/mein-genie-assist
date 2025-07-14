
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/30 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-green-400 animate-pulse" />
              <span className="text-green-100">Your AI-Powered Administrative Assistant</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Eliminate Bureaucratic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 block animate-pulse">
              Complexities Forever
            </span>
          </h1>
          
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
            Mein Genie is your intelligent companion that transforms complex administrative tasks into simple conversations. 
            Perfect for immigrants and seniors who want to navigate bureaucracy with confidence and ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold transform hover:scale-105 transition-all duration-300" asChild>
              <Link to="/register">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="text-center animate-fade-in">
            <p className="text-gray-300 mb-4 font-medium">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🇩🇪 Germany</div>
              <div className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🇺🇸 USA</div>
              <div className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🇬🇧 UK</div>
              <div className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🇨🇦 Canada</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <p className="text-white font-medium">
                📞 Call us: <span className="text-green-400 font-semibold">+49 176 86315894</span>
              </p>
            </div>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
