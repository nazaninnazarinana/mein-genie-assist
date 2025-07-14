
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Search, Phone, Clock, MapPin, Check, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";

type TerminoStep = 'request' | 'processing' | 'selection';

interface Appointment {
  id: string;
  centerName: string;
  address: string;
  date: string;
  time: string;
}

const Termino = () => {
  const [currentStep, setCurrentStep] = useState<TerminoStep>('request');
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
    
    // Simulate processing stages
    setTimeout(() => setProcessingStage(1), 1000);
    setTimeout(() => setProcessingStage(2), 3000);
    setTimeout(() => {
      setAppointments(mockAppointments);
      setCurrentStep('selection');
    }, 5000);
  };

  const handleConfirmAppointment = () => {
    if (!selectedAppointment) return;
    
    // Simulate adding to calendar and sending notification
    alert(`Appointment confirmed at ${selectedAppointment.centerName} on ${selectedAppointment.date} at ${selectedAppointment.time}`);
    
    // Reset to start
    setCurrentStep('request');
    setAppointmentRequest('');
    setSelectedDate(new Date());
    setSelectedAppointment(null);
  };

  const renderRequestStep = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Termino: We call and make an appointment for you!
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Tell us what you need and we'll handle the rest - from searching to booking your perfect appointment time.
        </p>
      </div>

      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
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
          onClick={() => setCurrentStep('request')}
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
      {currentStep === 'request' && renderRequestStep()}
      {currentStep === 'processing' && renderProcessingStep()}
      {currentStep === 'selection' && renderSelectionStep()}
    </div>
  );
};

export default Termino;
