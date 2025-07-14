
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, ArrowLeft, Bot, User } from "lucide-react";
import Navigation from "@/components/Navigation";

interface FormChatProps {
  selectedForm: {
    id: string;
    name: string;
    category: string;
    description: string;
  };
  onComplete: (formData: Record<string, string>) => void;
  onBack: () => void;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FormChat = ({ selectedForm, onComplete, onBack }: FormChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formQuestions = [
    "Hello! I'm here to help you fill out your form. Let's start with your full name.",
    "What's your date of birth? Please provide it in DD/MM/YYYY format.",
    "What's your current address?",
    "What's your phone number?",
    "What's your email address?",
    "What's your nationality?",
    "What's your occupation?",
    "Perfect! I have all the information I need. Let me prepare your form for review."
  ];

  const formFields = [
    'fullName',
    'dateOfBirth',
    'address',
    'phoneNumber',
    'email',
    'nationality',
    'occupation'
  ];

  useEffect(() => {
    // Initial greeting
    const initialMessage: Message = {
      id: '1',
      text: `Great! You've selected "${selectedForm.name}". ${formQuestions[0]}`,
      isUser: false,
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, [selectedForm]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, isUser: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, true);
    
    // Store the answer
    if (currentQuestion < formFields.length) {
      const newFormData = { ...formData };
      newFormData[formFields[currentQuestion]] = inputText;
      setFormData(newFormData);
    }

    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < formQuestions.length) {
        addMessage(formQuestions[nextQuestion], false);
        setCurrentQuestion(nextQuestion);
      } else {
        // Complete the form
        setTimeout(() => {
          onComplete(formData);
        }, 1000);
      }
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    setIsListening(!isListening);
    
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        setIsListening(false);
        // Simulate transcribed text
        setInputText("I am speaking through the microphone...");
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:text-green-400 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Form Selection
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Preview */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 border-white/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white">Form Preview</CardTitle>
                <p className="text-gray-300 text-sm">{selectedForm.name}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {formFields.map((field, index) => (
                    <div key={field} className="space-y-1">
                      <label className="text-sm text-gray-400 capitalize">
                        {field.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <div className={`p-2 rounded border ${
                        formData[field] 
                          ? 'bg-green-400/20 border-green-400/50 text-green-300' 
                          : 'bg-white/5 border-white/20 text-gray-500'
                      }`}>
                        {formData[field] || 'Not filled yet'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-cyan-400" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                        message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.isUser ? 'bg-green-400' : 'bg-cyan-400'
                        }`}>
                          {message.isUser ? (
                            <User className="h-4 w-4 text-black" />
                          ) : (
                            <Bot className="h-4 w-4 text-black" />
                          )}
                        </div>
                        <div className={`p-3 rounded-lg ${
                          message.isUser 
                            ? 'bg-green-400/20 text-green-100' 
                            : 'bg-white/10 text-white'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <Input
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your answer or use the microphone..."
                        className="pr-12 bg-white/10 border-white/20 text-white placeholder-gray-400"
                        disabled={isListening}
                      />
                      {isListening && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    
                    <Button
                      onClick={toggleRecording}
                      className={`p-3 rounded-full ${
                        isRecording 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500'
                      }`}
                    >
                      {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                    
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim()}
                      className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {isListening && (
                    <p className="text-cyan-400 text-sm mt-2 text-center animate-pulse">
                      Listening... Speak now
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormChat;
