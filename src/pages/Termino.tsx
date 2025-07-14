import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Search, Phone, Clock, MapPin, Check, Loader2, Bot, Mic, Calendar as CalendarIcon, Sync, Bell, Star, Sparkles, Play, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";

type TerminoStep = 'main' | 'processing' | 'selection';

interface Appointment {
  id: string;
  centerName: string;
  address: string;
  date: string;
  time: string;
}

const Termino = () => {
  const [currentStep, setCurrentStep] = useState<TerminoStep>('main');
  const [appointmentRequest, setAppointmentRequest] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [processingStage, setProcessingStage] = useState(0);

  const mockAppointments: Appointment[] = [
    {
      id: '1',
      centerName: 'Munich Medical Center',
      address: 'Maximilianstraße 12, 80539 München',
      date: '2024-01-15',
      time: '10:30 AM'
    },
    {
      id: '2',
      centerName: 'City Health Clinic',
      address: 'Leopoldstraße 45, 80802 München',
      date: '2024-01-16',
      time: '2:15 PM'
    },
    {
      id: '3',
      centerName: 'Bavaria Medical Institute',
      address: 'Sendlinger Str. 23, 80331 München',
      date: '2024-01-17',
      time: '9:00 AM'
    }
  ];

  const handleSearchAppointment = () => {
    if (!appointmentRequest.trim()) return;
    
    setCurrentStep('processing');
    setProcessingStage(0);
    
    setTimeout(() => setProcessingStage(1), 1000);
    setTimeout(() => setProcessingStage(2), 3000);
    setTimeout(() => {
      setAppointments(mockAppointments);
      setCurrentStep('selection');
    }, 5000);
  };

  const handleConfirmAppointment = () => {
    if (!selectedAppointment) return;
    
    alert(`Appointment confirmed at ${selectedAppointment.centerName} on ${selectedAppointment.date} at ${selectedAppointment.time}`);
    
    setCurrentStep('main');
    setAppointmentRequest('');
    setSelectedDate(new Date());
    setSelectedAppointment(null);
  };

  const renderMainStep = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Termino: We call and make an appointment for you!
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Tell us what you need and we'll handle the rest - from searching to booking your perfect appointment time.
        </p>
      </div>

      {/* Main Interaction Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          <Sparkles className="inline mr-3 h-8 w-8 text-cyan-400" />
          Start Your Appointment Request
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <Bot className="h-12 w-12 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Smart Avatar</h3>
              <p className="text-gray-300 text-lg">Our AI assistant will guide you through the process</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mic className="h-12 w-12 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Voice Interface</h3>
              <p className="text-gray-300 text-lg">Simply speak your appointment request</p>
              <Button className="mt-4 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Start Voice Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Showcase Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Advanced Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Automated Phone Call</h3>
              <p className="text-gray-300 text-sm mb-2">AI-powered phone calls to secure your appointments</p>
              <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                Professional Plan
              </span>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Online Reservation</h3>
              <p className="text-gray-300 text-sm">Works with websites and booking platforms automatically</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Search</h3>
              <p className="text-gray-300 text-sm mb-2">Find the fastest available high-priority slots</p>
              <span className="inline-block bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                Pro Plan
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Appointment Management Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Appointment Management
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CalendarIcon className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrated Calendar</h3>
              <p className="text-gray-300 text-sm">All your appointments in one central calendar</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sync className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Calendar Sync</h3>
              <p className="text-gray-300 text-sm">Sync with Google Calendar and other platforms</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Bell className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Notifications</h3>
              <p className="text-gray-300 text-sm">Reminders and confirmations for all appointments</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Plans & Subscription Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          <Star className="inline mr-3 h-8 w-8 text-yellow-400" />
          Upgrade Your Experience
        </h2>
        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-400/30 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Star className="h-10 w-10 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Pro Plan Exclusive Features</h3>
            <p className="text-gray-300 text-lg mb-6">Unlock premium features for the ultimate appointment booking experience</p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold text-lg px-8 py-3">
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Request Form */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Step 1: Register a Request</CardTitle>
          <CardDescription className="text-gray-300">
            Describe what kind of appointment you need in detail
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              What do you need an appointment for? Please write in detail.
            </label>
            <Textarea
              placeholder="Example: Dermatologist appointment in Munich for next week"
              value={appointmentRequest}
              onChange={(e) => setAppointmentRequest(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Preferred Time Frame
            </label>
            <div className="bg-white/10 border-white/20 rounded-lg p-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="text-white"
              />
            </div>
          </div>

          <Button
            onClick={handleSearchAppointment}
            disabled={!appointmentRequest.trim()}
            className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold py-4 text-lg"
          >
            <Search className="mr-2 h-5 w-5" />
            Search for Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderProcessingStep = () => {
    const stages = [
      { text: "Analyzing your request...", icon: Search },
      { text: "Searching online systems...", icon: Clock },
      { text: "Making phone calls to centers. This may take a few minutes...", icon: Phone }
    ];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Processing Your Request</h2>
          <p className="text-gray-300">Please wait while we find the best appointments for you</p>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              {stages.map((stage, index) => {
                const StageIcon = stage.icon;
                const isActive = processingStage >= index;
                const isCompleted = processingStage > index;

                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      isCompleted ? 'bg-green-500' : isActive ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}>
                      {isCompleted ? (
                        <Check className="h-6 w-6 text-white" />
                      ) : isActive ? (
                        <StageIcon className="h-6 w-6 text-black animate-pulse" />
                      ) : (
                        <StageIcon className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-lg ${
                        isActive ? 'text-white font-medium' : 'text-gray-400'
                      }`}>
                        {stage.text}
                      </p>
                      {isActive && !isCompleted && (
                        <div className="flex items-center mt-2">
                          <Loader2 className="h-4 w-4 text-cyan-400 animate-spin mr-2" />
                          <span className="text-cyan-400 text-sm">Processing...</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderSelectionStep = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Available Appointments</h2>
        <p className="text-gray-300">Select your preferred appointment time</p>
      </div>

      <div className="grid gap-6 mb-8">
        {appointments.map((appointment) => (
          <Card
            key={appointment.id}
            className={`bg-white/10 border-white/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-white/20 ${
              selectedAppointment?.id === appointment.id ? 'ring-2 ring-cyan-400' : ''
            }`}
            onClick={() => setSelectedAppointment(appointment)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{appointment.centerName}</h3>
                  <div className="flex items-center text-gray-300 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{appointment.address}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{appointment.date} at {appointment.time}</span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 ${
                  selectedAppointment?.id === appointment.id 
                    ? 'bg-cyan-400 border-cyan-400' 
                    : 'border-gray-400'
                }`}>
                  {selectedAppointment?.id === appointment.id && (
                    <Check className="h-4 w-4 text-black m-0.5" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={() => setCurrentStep('main')}
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
        >
          Start Over
        </Button>
        <Button
          onClick={handleConfirmAppointment}
          disabled={!selectedAppointment}
          className="flex-1 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold"
        >
          Final Reservation This Time
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {currentStep === 'main' && renderMainStep()}
      {currentStep === 'processing' && renderProcessingStep()}
      {currentStep === 'selection' && renderSelectionStep()}
    </div>
  );
};

export default Termino;
