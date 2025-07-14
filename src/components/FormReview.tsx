
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Download, Send, Edit, Check, X } from "lucide-react";
import Navigation from "@/components/Navigation";

interface FormReviewProps {
  selectedForm: {
    id: string;
    name: string;
    category: string;
    description: string;
  };
  formData: Record<string, string>;
  onStartOver: () => void;
  onBack: () => void;
}

const FormReview = ({ selectedForm, formData, onStartOver, onBack }: FormReviewProps) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editedData, setEditedData] = useState(formData);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const fieldLabels: Record<string, string> = {
    fullName: 'Full Name',
    dateOfBirth: 'Date of Birth',
    address: 'Address',
    phoneNumber: 'Phone Number',
    email: 'Email Address',
    nationality: 'Nationality',
    occupation: 'Occupation'
  };

  const handleEditField = (field: string) => {
    setEditingField(field);
  };

  const handleSaveField = (field: string, value: string) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
    setEditingField(null);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      // Create a blob with form data for download
      const formContent = Object.entries(editedData)
        .map(([key, value]) => `${fieldLabels[key]}: ${value}`)
        .join('\n');
      
      const blob = new Blob([formContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedForm.name.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 2000);
  };

  const handleSendToConsultant = async () => {
    setIsSending(true);
    // Simulate sending process
    setTimeout(() => {
      setIsSending(false);
      alert('Form sent to consultant successfully! You will receive a confirmation email shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:text-green-400 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chat
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Review Your Completed Form
          </h1>
          <p className="text-gray-300 text-lg">
            Please review all information and make any necessary changes before finalizing.
          </p>
        </div>

        <Card className="bg-white/10 border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span>{selectedForm.name}</span>
              <span className="text-sm text-gray-400 font-normal">
                {selectedForm.category}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(editedData).map(([field, value]) => (
              <div key={field} className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {fieldLabels[field]}
                </label>
                
                {editingField === field ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      defaultValue={value}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSaveField(field, (e.target as HTMLInputElement).value);
                        }
                      }}
                      className="flex-1 bg-white/10 border-white/20 text-white"
                      autoFocus
                    />
                    <Button
                      size="sm"
                      onClick={(e) => {
                        const input = (e.target as HTMLElement).parentElement?.querySelector('input');
                        if (input) {
                          handleSaveField(field, input.value);
                        }
                      }}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCancelEdit}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-white">{value}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEditField(field)}
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-white/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold px-8 py-3"
          >
            <Download className="mr-2 h-5 w-5" />
            {isDownloading ? 'Generating PDF...' : 'Download PDF File'}
          </Button>
          
          <Button
            onClick={handleSendToConsultant}
            disabled={isSending}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
          >
            <Send className="mr-2 h-5 w-5" />
            {isSending ? 'Sending...' : 'Send to Consultant'} 
            <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Premium
            </span>
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={onStartOver}
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-white/10"
          >
            Start Over with a New Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormReview;
