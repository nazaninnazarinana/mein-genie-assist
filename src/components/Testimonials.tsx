
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria González",
      role: "Recent Immigrant",
      content: "Mein Genie helped me complete my residence permit application in just 15 minutes. The voice assistant understood my Spanish perfectly and guided me through every step.",
      rating: 5,
      location: "Berlin, Germany"
    },
    {
      name: "Hans Mueller",
      role: "Retiree",
      content: "As a 72-year-old, I was struggling with online tax forms. Termino even called the tax office for me and booked an appointment. Incredible service!",
      rating: 5,
      location: "Munich, Germany"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Student",
      content: "The platform's Arabic support made all the difference. I was able to register for university and handle all my student visa paperwork without stress.",
      rating: 5,
      location: "Hamburg, Germany"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who have transformed their administrative experience with Mein Genie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
