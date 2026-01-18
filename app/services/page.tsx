'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'filing',
    icon: FileText,
    title: 'Tax Return Filing',
    description: 'Comprehensive tax preparation and filing services designed specifically for non-resident students.',
    features: [
      'Form 1040-NR preparation and filing',
      'State tax return preparation',
      'Form 8843 (Statement for Exempt Individuals)',
      'Tax treaty benefit application',
      'ITIN application assistance',
      'W-2, 1042-S, and 1099 processing',
      'Scholarship and fellowship income reporting',
      'Multiple state filing support',
    ],
    benefits: [
      'Fast turnaround time (5-7 business days)',
      'IRS e-filing with confirmation',
      'Accuracy guarantee',
      'Maximum refund optimization',
    ],
  },
  {
    id: 'planning',
    icon: TrendingUp,
    title: 'Tax Planning',
    description: 'Strategic tax planning services to help you minimize tax liability and maximize savings throughout the year.',
    features: [
      'Year-round tax strategy consultation',
      'Estimated tax payment calculations',
      'Tax-efficient investment guidance',
      'Deduction and credit planning',
      'Income optimization strategies',
      'OPT/CPT tax planning',
      'Residency status planning',
      'Multi-year tax projections',
    ],
    benefits: [
      'Reduce your overall tax burden',
      'Avoid penalties and interest',
      'Plan for visa status changes',
      'Make informed financial decisions',
    ],
  },
  {
    id: 'consultancy',
    icon: MessageSquare,
    title: 'Tax & Financial Consultancy',
    description: 'Expert one-on-one consultations to address your specific tax questions and financial concerns.',
    features: [
      'Personal tax consultations',
      'Visa status and tax implications',
      'Tax treaty interpretation and application',
      'IRS notice and audit support',
      'State residency determination',
      'Investment and savings advice',
      'Retirement account guidance (401k, IRA)',
      'Post-graduation tax planning',
    ],
    benefits: [
      'Expert answers to your questions',
      'Personalized advice for your situation',
      'Peace of mind and confidence',
      'Long-term financial planning support',
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tax solutions designed specifically for non-resident students in the United States
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-20"
              >
                <Card className="overflow-hidden border-2">
                  <CardHeader className={`${index % 2 === 0 ? 'bg-navy-50' : 'bg-emerald-50'} pb-8`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-navy-900' : 'bg-emerald-600'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-navy-900 mb-3">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-gray-700">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-navy-900 mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy-900 mb-4">
                          Key Benefits
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-navy-900 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/start-filing">
                          <Button size="lg" variant={index % 2 === 0 ? 'default' : 'secondary'} className="w-full group">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
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
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the service that best fits your needs, or contact us for personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-filing">
                <Button size="xl" variant="secondary">
                  Start Filing Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="xl" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
