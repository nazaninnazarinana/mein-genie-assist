
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with any questions or concerns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in touch</CardTitle>
                <CardDescription className="text-gray-300">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <a href="tel:+4917686315894" className="text-gray-300 hover:text-cyan-400">
                      +49 176 86315894
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href="mailto:support@meingenie.de" className="text-gray-300 hover:text-cyan-400">
                      support@meingenie.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-gray-300">Berlin, Germany</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Monday - Friday</p>
                    <p className="text-gray-300">9:00 AM - 6:00 PM (CET)</p>
                    <p className="text-white font-semibold mt-2">Saturday</p>
                    <p className="text-gray-300">10:00 AM - 2:00 PM (CET)</p>
                    <p className="text-gray-300 mt-2 text-sm">
                      Emergency support available 24/7 for premium users
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
