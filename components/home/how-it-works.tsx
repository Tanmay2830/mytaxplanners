'use client';

import { motion } from 'framer-motion';
import { FileUp, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: FileUp,
    title: 'Submit Your Information',
    description: 'Fill out our simple online form with your details, visa type, and income information. Upload any required documents securely.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Expert Review',
    description: 'Our CPA-led team reviews your information, prepares your tax returns, and identifies all applicable deductions and treaty benefits.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'File & Relax',
    description: 'We file your tax returns electronically with the IRS and provide you with copies. Track your refund and enjoy peace of mind.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Filing your taxes with MyTaxPlanners is simple and straightforward
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 relative">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
  );
}
