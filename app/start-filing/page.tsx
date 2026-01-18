'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, FileUp, ArrowRight } from 'lucide-react';

const steps = ['Personal Info', 'Visa & Income', 'Review & Submit'];

export default function StartFilingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visaType: '',
    incomeType: '',
    hasSSN: '',
    university: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Application submitted successfully! We will contact you within 24 hours.');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Start Your Tax Filing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Complete this form to get started. We'll review your information and contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        index <= currentStep
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="text-xs mt-2 text-center hidden sm:block">
                      {step}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-colors ${
                        index < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">
                  {steps[currentStep]}
                </CardTitle>
                <CardDescription>
                  {currentStep === 0 && 'Let\'s start with your basic information'}
                  {currentStep === 1 && 'Tell us about your visa status and income'}
                  {currentStep === 2 && 'Review your information and submit'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 0 && (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john.doe@university.edu"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="university">University/Institution</Label>
                        <Input
                          id="university"
                          name="university"
                          value={formData.university}
                          onChange={handleInputChange}
                          placeholder="e.g., Stanford University"
                        />
                      </div>
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="visaType">Visa Type *</Label>
                        <Select
                          value={formData.visaType}
                          onValueChange={(value) => handleSelectChange('visaType', value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your visa type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="f1">F-1 Student Visa</SelectItem>
                            <SelectItem value="j1">J-1 Exchange Visitor</SelectItem>
                            <SelectItem value="opt">OPT (F-1)</SelectItem>
                            <SelectItem value="cpt">CPT (F-1)</SelectItem>
                            <SelectItem value="other">Other Non-Resident</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="incomeType">Primary Income Type *</Label>
                        <Select
                          value={formData.incomeType}
                          onValueChange={(value) => handleSelectChange('incomeType', value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your income type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wages">Wages (W-2)</SelectItem>
                            <SelectItem value="scholarship">Scholarship/Fellowship</SelectItem>
                            <SelectItem value="both">Both Wages and Scholarship</SelectItem>
                            <SelectItem value="none">No Income</SelectItem>
                            <SelectItem value="other">Other Income</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hasSSN">Do you have an SSN or ITIN? *</Label>
                        <Select
                          value={formData.hasSSN}
                          onValueChange={(value) => handleSelectChange('hasSSN', value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssn">Yes, I have an SSN</SelectItem>
                            <SelectItem value="itin">Yes, I have an ITIN</SelectItem>
                            <SelectItem value="neither">No, I don't have either</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <FileUp className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-emerald-900 mb-1">
                              Document Upload (Optional)
                            </p>
                            <p className="text-sm text-emerald-700">
                              After submitting this form, we'll send you secure instructions for uploading your tax documents.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-semibold text-navy-900 mb-4">Review Your Information</h3>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">{formData.email}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">{formData.phone}</span>
                          </div>
                          {formData.university && (
                            <div className="grid grid-cols-2 gap-2">
                              <span className="text-gray-600">University:</span>
                              <span className="font-medium">{formData.university}</span>
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">Visa Type:</span>
                            <span className="font-medium">{formData.visaType}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">Income Type:</span>
                            <span className="font-medium">{formData.incomeType}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">SSN/ITIN:</span>
                            <span className="font-medium">{formData.hasSSN}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
                        <h4 className="font-semibold text-navy-900 mb-2">What Happens Next?</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>We'll review your information within 24 hours</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>You'll receive secure instructions for document upload</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Our team will prepare your tax returns</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>You'll review and approve before filing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        size="lg"
                      >
                        Back
                      </Button>
                    )}
                    {currentStep < steps.length - 1 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        size="lg"
                        variant="secondary"
                        className="ml-auto group"
                      >
                        Next
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        size="lg"
                        variant="secondary"
                        className="ml-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
