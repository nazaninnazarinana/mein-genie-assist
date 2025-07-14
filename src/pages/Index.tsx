
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Shield, Clock, Globe, Heart, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModuleCards from "@/components/ModuleCards";
import WhyMeinGenie from "@/components/WhyMeinGenie";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ModuleCards />
      <WhyMeinGenie />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
