
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, ArrowRight, Mic, Phone, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ModuleCards = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Two Powerful Modules, One Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the module that fits your needs, or use both to completely streamline your administrative tasks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formino Module */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Formino</CardTitle>
                  <CardDescription className="text-base">Intelligent Form Assistant</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Transform complex paper forms into simple voice conversations. Upload, scan, or link any form, 
                then chat with our AI in your native language to fill it out perfectly.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mic className="h-5 w-5 text-primary" />
                  <span className="text-sm">Voice conversation in your language</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">OCR for paper form scanning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Human review before submission</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                  <Link to="/formino">
                    Explore Formino
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Termino Module */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Termino</CardTitle>
                  <CardDescription className="text-base">Smart Appointment Booking</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Never wait on hold again. Our AI makes phone calls for you, books appointments, and manages 
                your calendar automatically. Perfect for doctor visits, government offices, and more.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">AI-powered phone calls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm">Automatic calendar synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 appointment monitoring</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                  <Link to="/termino">
                    Explore Termino
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModuleCards;
