
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, HelpCircle, Video, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Help = () => {
  const faqs = [
    {
      question: "How do I fill out my first form with Formino?",
      answer: "Simply upload your form or take a picture of it, then have a conversation with our AI assistant. The AI will ask you questions in your native language and fill out the form for you."
    },
    {
      question: "How does Termino book appointments for me?",
      answer: "Tell us what kind of appointment you need, and our AI will search online systems and even make phone calls to book the best available time slot for you."
    },
    {
      question: "Is my personal data secure?",
      answer: "Absolutely! We use bank-level encryption and follow strict German data protection laws (DSGVO). Your data is never shared with third parties."
    },
    {
      question: "What languages are supported?",
      answer: "We support German, English, Persian, Arabic, Spanish, Turkish, and many other languages. Our AI can understand and respond in your preferred language."
    },
    {
      question: "How much does it cost?",
      answer: "We offer 2 free forms per month. For unlimited access, our Premium plan costs €19.99/month with many additional features."
    },
    {
      question: "Do I need to install anything?",
      answer: "No! Mein Genie works directly in your web browser. You can also add it to your phone's home screen for easy access."
    }
  ];

  const tutorials = [
    {
      title: "Getting Started with Formino",
      description: "Learn how to upload and fill out your first form",
      icon: FileText,
      duration: "3 min",
      link: "/formino"
    },
    {
      title: "Booking Appointments with Termino",
      description: "Step-by-step guide to booking your first appointment",
      icon: Calendar,
      duration: "4 min",
      link: "/termino"
    },
    {
      title: "Account Setup and Profile",
      description: "How to set up your account and manage your profile",
      icon: HelpCircle,
      duration: "2 min",
      link: "/register"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about using Mein Genie effectively
          </p>
        </div>

        {/* Quick Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                      <tutorial.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{tutorial.title}</CardTitle>
                      <span className="text-xs text-gray-400">{tutorial.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold"
                    asChild
                  >
                    <Link to={tutorial.link}>
                      <Video className="mr-2 h-4 w-4" />
                      Watch Tutorial
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Still Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our support team</p>
                <Button
                  className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold"
                  asChild
                >
                  <a href="tel:+4917686315894">+49 176 86315894</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <Button
                  className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Help;
