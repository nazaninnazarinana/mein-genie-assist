
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We understand the challenges faced by immigrants and seniors, building solutions with genuine care and understanding."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and privacy are sacred to us. We implement the highest security standards to protect your information."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We harness cutting-edge AI technology not for its own sake, but to solve real human problems."
    },
    {
      icon: Users,
      title: "Accessibility for All",
      description: "Technology should serve everyone. We design with accessibility and inclusivity at the core."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Story & Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mein Genie was born from a simple observation: bureaucracy shouldn't be a barrier to living your life. 
              We're here to eliminate that barrier, one form and appointment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                How It All Started
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The idea for Mein Genie came from witnessing the struggles of our own family members and friends 
                  who had immigrated to Germany. Hours spent waiting in government offices, language barriers 
                  preventing access to essential services, and the overwhelming complexity of administrative processes.
                </p>
                <p>
                  We realized that while technology was advancing rapidly, it wasn't being used to solve these 
                  fundamental human challenges. So we set out to build something different – an AI assistant 
                  that truly understands and serves people who need help the most.
                </p>
                <p>
                  Today, Mein Genie helps thousands of people navigate bureaucracy with confidence, 
                  turning what was once a source of stress into a simple, even pleasant experience.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Global Impact
                  </h3>
                  <p className="text-muted-foreground">
                    Supporting immigrants and seniors across multiple countries, 
                    with plans to expand our reach worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To eliminate bureaucratic barriers and empower every person, regardless of age or background, 
                  to access the services they need with dignity and ease. We believe that administrative processes 
                  should serve people, not intimidate them.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where language barriers don't prevent access to essential services, where age doesn't 
                  become a barrier to using modern systems, and where every person can navigate administrative 
                  processes with confidence and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built by People Who Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team combines technical expertise with deep empathy for the challenges faced by our users. 
              We're immigrants, children of immigrants, and allies who understand the importance of accessible services.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Engineering Team</h3>
                <p className="text-muted-foreground text-sm">AI specialists and developers</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Support Team</h3>
                <p className="text-muted-foreground text-sm">Multilingual support specialists</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Security Team</h3>
                <p className="text-muted-foreground text-sm">Data protection experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
