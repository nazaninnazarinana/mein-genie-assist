
import React from 'react';
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Voice conversation in 15+ languages",
    "OCR scanning for paper documents",
    "Automatic appointment booking",
    "Human advisor support",
    "Secure document storage",
    "Calendar integration",
    "Real-time form processing",
    "24/7 availability"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mein Genie combines cutting-edge AI technology with human empathy to create 
              the most comprehensive administrative assistance platform available.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">AI is listening...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Processing your request...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Form completed successfully!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
