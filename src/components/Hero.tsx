
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Your AI-Powered Administrative Assistant</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Eliminate Bureaucratic
            <span className="text-primary block">Complexities Forever</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Mein Genie is your intelligent companion that transforms complex administrative tasks into simple conversations. 
            Perfect for immigrants and seniors who want to navigate bureaucracy with confidence and ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/register">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center items-center space-x-6 opacity-60">
              <div className="text-sm font-medium">🇩🇪 Germany</div>
              <div className="text-sm font-medium">🇺🇸 USA</div>
              <div className="text-sm font-medium">🇬🇧 UK</div>
              <div className="text-sm font-medium">🇨🇦 Canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
