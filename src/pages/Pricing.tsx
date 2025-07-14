
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "/month",
      description: "Perfect for trying out our services",
      features: [
        "2 free forms per month",
        "Basic form templates",
        "Email support",
        "Standard processing time"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Premium",
      price: "€19.99",
      period: "/month",
      description: "Ideal for regular users",
      features: [
        "Unlimited forms",
        "Priority processing",
        "Phone support",
        "Advanced form templates",
        "Human consultant review",
        "Termino appointments (5 per month)",
        "Calendar integration"
      ],
      cta: "Start Premium",
      popular: true
    },
    {
      name: "Business",
      price: "€49.99",
      period: "/month",
      description: "For businesses and frequent users",
      features: [
        "Everything in Premium",
        "Unlimited Termino appointments",
        "Dedicated account manager",
        "API access",
        "Custom form templates",
        "Priority phone support",
        "Team collaboration tools"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`bg-white/10 border-white/20 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:bg-white/15 ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-4 py-1 text-sm font-semibold">
                  <Star className="h-4 w-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-300">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  } font-semibold py-3`}
                  asChild
                >
                  <Link to="/register">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Need help choosing? Contact us at{" "}
            <a href="tel:+4917686315894" className="text-cyan-400 hover:text-cyan-300">
              +49 176 86315894
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
