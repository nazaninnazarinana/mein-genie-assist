
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Zap, Users, Globe, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Data Security",
      description: "Your personal information is protected with bank-level encryption and strict privacy policies."
    },
    {
      icon: Heart,
      title: "User Empowerment",
      description: "We believe everyone deserves to navigate bureaucracy with confidence, regardless of language or experience."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously develop cutting-edge AI solutions to simplify complex administrative processes."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Forms Processed" },
    { number: "5,000+", label: "Appointments Booked" },
    { number: "15+", label: "Languages Supported" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Mein Genie
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering people to overcome bureaucratic barriers through intelligent automation and compassionate support.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-3xl text-center mb-4">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Mein Genie was born from a simple observation: millions of people struggle with administrative tasks 
                every day, not because they lack intelligence or capability, but because the system is unnecessarily complex.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our founders experienced firsthand the frustration of navigating bureaucracy in a foreign country. 
                Language barriers, confusing forms, endless phone calls, and long waiting times became daily obstacles. 
                We realized that technology could eliminate these barriers entirely.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, Mein Genie serves thousands of users across Germany and beyond, transforming complex 
                administrative processes into simple conversations. We're not just a tech company – we're a bridge 
                between people and the systems that serve them.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-3xl text-center mb-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto">
                  "We believe that no one should be held back from their goals by administrative complexity. 
                  Our mission is to democratize access to bureaucratic processes, making them simple, 
                  fast, and accessible to everyone, regardless of their language, technical skills, or background."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="p-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardContent className="py-8">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Have questions about our mission or want to learn more about how we're changing 
                the world of bureaucracy? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+4917686315894"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"
                >
                  +49 176 86315894
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <a
                  href="mailto:support@meingenie.de"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"
                >
                  support@meingenie.de
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
