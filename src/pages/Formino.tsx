
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Camera, Upload, Link, Mic, MessageSquare, Eye, Download, Printer, UserCheck, Play, Sparkles } from "lucide-react";
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
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Take a picture of your paper forms or talk to us, we'll do the rest.
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            <Sparkles className="inline mr-3 h-8 w-8 text-cyan-400" />
            How Do You Want to Start?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Camera className="h-10 w-10 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scan with Camera</h3>
                <p className="text-gray-300">Take a picture of your paper forms and we'll digitize them instantly</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-10 w-10 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Upload File</h3>
                <p className="text-gray-300">Upload PDF and Word files directly from your device</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Link className="h-10 w-10 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Online Link</h3>
                <p className="text-gray-300">Enter the address of web forms and we'll handle the rest</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Interaction Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            AI Interaction Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                const voiceForm: FormType = {
                  id: 'voice-interaction',
                  name: 'Voice Interaction',
                  category: 'AI',
                  description: 'Talk to our AI assistant',
                  icon: Mic
                };
                handleFormSelect(voiceForm);
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mic className="h-12 w-12 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Voice Assistant</h3>
                <p className="text-gray-300 text-lg">Start a voice conversation with our smart assistant</p>
                <Button className="mt-4 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold">
                  <Play className="mr-2 h-5 w-5" />
                  Start Voice Chat
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                const textForm: FormType = {
                  id: 'text-interaction',
                  name: 'Text Interaction',
                  category: 'AI',
                  description: 'Chat with our AI assistant',
                  icon: MessageSquare
                };
                handleFormSelect(textForm);
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-12 w-12 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Text Chat</h3>
                <p className="text-gray-300 text-lg">Interact with the assistant using text messages</p>
                <Button className="mt-4 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Text Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Review & Output Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Review & Output Options
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
                <p className="text-gray-300 text-sm">Review and finalize your completed form</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Download PDF</h3>
                <p className="text-gray-300 text-sm">Get a digital output of your form</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Printer className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Print</h3>
                <p className="text-gray-300 text-sm">Get a printable version of your form</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Consultant</h3>
                <p className="text-gray-300 text-sm">Send to expert for professional review</p>
              </CardContent>
            </Card>
          </div>
        </div>
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
