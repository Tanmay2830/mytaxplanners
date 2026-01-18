'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, DollarSign, FileCheck, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'CPA-Led Expertise',
    description: 'Our team includes experienced CPAs who specialize in non-resident tax matters',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most returns are completed within 5-7 business days',
  },
  {
    icon: Users,
    title: 'Student-Focused',
    description: 'We understand the unique challenges faced by international students',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees or surprises',
  },
  {
    icon: FileCheck,
    title: 'Accuracy Guaranteed',
    description: '100% accuracy guarantee on all tax filings',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Responsive customer service throughout the entire process',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose MyTaxPlanners?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We combine expertise, speed, and student-friendly service to make your tax filing experience seamless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
