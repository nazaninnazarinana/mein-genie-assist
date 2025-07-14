
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Upload, FileText, Users, Briefcase, Shield, Car, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import FormChat from "@/components/FormChat";
import FormReview from "@/components/FormReview";

type FormStep = 'selection' | 'chat' | 'review';

interface FormType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const Formino = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('selection');
  const [selectedForm, setSelectedForm] = useState<FormType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<Record<string, string>>({});

  const formCategories = [
    {
      name: "Immigration",
      icon: Users,
      forms: [
        { id: "visa-app", name: "Visa Application Form", description: "Standard visa application for Germany", icon: FileText },
        { id: "residence-permit", name: "Residence Permit", description: "Apply for residence permit extension", icon: FileText },
        { id: "citizenship", name: "Citizenship Application", description: "German citizenship application form", icon: FileText }
      ]
    },
    {
      name: "Labor",
      icon: Briefcase,
      forms: [
        { id: "work-permit", name: "Work Permit Application", description: "Work authorization form", icon: FileText },
        { id: "job-registration", name: "Job Center Registration", description: "Register with job center", icon: FileText }
      ]
    },
    {
      name: "Insurance",
      icon: Shield,
      forms: [
        { id: "health-insurance", name: "Health Insurance Registration", description: "Register for health insurance", icon: FileText },
        { id: "car-insurance", name: "Car Insurance Application", description: "Vehicle insurance form", icon: Car }
      ]
    },
    {
      name: "Housing",
      icon: Home,
      forms: [
        { id: "housing-benefit", name: "Housing Benefit Application", description: "Apply for housing assistance", icon: FileText },
        { id: "rental-agreement", name: "Rental Agreement Form", description: "Standard rental contract", icon: FileText }
      ]
    }
  ];

  const allForms = formCategories.flatMap(category => 
    category.forms.map(form => ({ ...form, category: category.name }))
  );

  const filteredForms = allForms.filter(form =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSelect = (form: FormType) => {
    setSelectedForm(form);
    setCurrentStep('chat');
  };

  const handleChatComplete = (data: Record<string, string>) => {
    setFormData(data);
    setCurrentStep('review');
  };

  const handleStartOver = () => {
    setCurrentStep('selection');
    setSelectedForm(null);
    setFormData({});
  };

  const renderSelectionStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Formino: Your Smart Assistant for Completing Any Type of Form
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a picture of your paper forms or talk to us, we'll do the rest.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for forms (e.g., Visa application form)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
            />
          </div>
        </div>

        {/* Upload Custom Form Button */}
        <div className="text-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold px-8 py-4 text-lg"
            onClick={() => {
              const customForm: FormType = {
                id: 'custom-upload',
                name: 'Custom Form Upload',
                category: 'Custom',
                description: 'Upload your own form',
                icon: Upload
              };
              handleFormSelect(customForm);
            }}
          >
            <Upload className="mr-2 h-6 w-6" />
            Upload Your Custom Form
          </Button>
        </div>

        {/* Form Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {formCategories.map((category) => (
            <Card key={category.name} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg">
                    <category.icon className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white text-xl">{category.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.forms.map((form) => (
                  <div
                    key={form.id}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-200 group"
                    onClick={() => handleFormSelect({ ...form, category: category.name })}
                  >
                    <div className="flex items-start space-x-3">
                      <form.icon className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:text-green-400 transition-colors" />
                      <div>
                        <h4 className="text-white font-medium group-hover:text-green-400 transition-colors">
                          {form.name}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">{form.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filtered Search Results */}
        {searchTerm && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Search Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForms.map((form) => (
                <Card
                  key={form.id}
                  className="bg-white/10 border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300 group"
                  onClick={() => handleFormSelect(form)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <form.icon className="h-6 w-6 text-cyan-400 mt-1 group-hover:text-green-400 transition-colors" />
                      <div>
                        <h4 className="text-white font-medium group-hover:text-green-400 transition-colors">
                          {form.name}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">{form.description}</p>
                        <span className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full mt-2">
                          {form.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (currentStep === 'selection') {
    return renderSelectionStep();
  }

  if (currentStep === 'chat') {
    return (
      <FormChat
        selectedForm={selectedForm!}
        onComplete={handleChatComplete}
        onBack={() => setCurrentStep('selection')}
      />
    );
  }

  if (currentStep === 'review') {
    return (
      <FormReview
        selectedForm={selectedForm!}
        formData={formData}
        onStartOver={handleStartOver}
        onBack={() => setCurrentStep('chat')}
      />
    );
  }

  return null;
};

export default Formino;
