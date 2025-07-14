
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Globe, Shield, Heart, Users, Zap } from "lucide-react";

const WhyMeinGenie = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Precious Time",
      description: "Transform hours of paperwork into minutes of conversation. Our AI handles the complexity while you focus on what matters."
    },
    {
      icon: Globe,
      title: "Break Language Barriers",
      description: "Communicate in your native language. Our AI speaks multiple languages and understands cultural nuances."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is encrypted and protected with the highest security standards. Privacy is our top priority."
    },
    {
      icon: Heart,
      title: "Built with Empathy",
      description: "Designed specifically for immigrants and seniors, understanding the unique challenges you face."
    },
    {
      icon: Users,
      title: "Human Support Always Available",
      description: "When you need a human touch, our advisors are ready to help and guide you through any process."
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Get your forms processed and appointments booked faster than ever before with AI automation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Mein Genie?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the frustration of dealing with bureaucracy. That's why we built a platform 
            that puts your needs first and eliminates unnecessary complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeinGenie;
