'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUp, Users, CheckCircle, Clock, Shield, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: FileUp,
    title: 'Submit Your Information',
    description: 'Start by filling out our simple online form. We\'ll ask for basic information about your visa status, income sources, and any tax documents you have.',
    details: [
      'Provide personal and visa information',
      'Upload tax documents (W-2, 1042-S, 1099, etc.)',
      'Share details about scholarships or fellowships',
      'Indicate your home country for treaty benefits',
    ],
    timeframe: '10-15 minutes',
  },
  {
    number: '02',
    icon: Users,
    title: 'Expert Review & Preparation',
    description: 'Our CPA-led team reviews your information, prepares your tax returns with maximum accuracy, and identifies all applicable deductions and treaty benefits.',
    details: [
      'Comprehensive document review',
      'Tax return preparation by licensed professionals',
      'Application of all eligible tax treaties',
      'Identification of deductions and credits',
    ],
    timeframe: '5-7 business days',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Review & Approve',
    description: 'We send you the completed tax returns for your review. You can ask questions, request changes, or approve for filing.',
    details: [
      'Receive detailed explanation of your returns',
      'Review all forms before filing',
      'Ask questions and get expert answers',
      'Request any necessary adjustments',
    ],
    timeframe: '1-2 business days',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'File & Track Refund',
    description: 'Once approved, we file your returns electronically with the IRS. You\'ll receive confirmation and can track your refund status.',
    details: [
      'Electronic filing with the IRS',
      'Filing confirmation and receipt',
      'Refund tracking assistance',
      'Copies of all filed documents',
    ],
    timeframe: 'Immediate filing',
  },
];

const guarantees = [
  {
    icon: Shield,
    title: '100% Accuracy Guarantee',
    description: 'We stand behind our work with a complete accuracy guarantee',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most returns completed within 5-7 business days',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Responsive customer service throughout the entire process',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Filing your taxes with MyTaxPlanners is simple, fast, and stress-free. Here's our proven 4-step process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-2">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center">
                          <step.icon className="h-10 w-10 text-emerald-600" />
                          <span className="absolute -top-3 -right-3 w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-navy-900">
                            {step.title}
                          </h3>
                          <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <guarantee.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/start-filing">
              <Button size="xl" variant="secondary">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
