'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: FileText,
    title: 'Tax Return Filing',
    description: 'Complete tax preparation and filing services for non-resident students. We handle Forms 8843, 1040-NR, and state returns.',
    features: ['Form 1040-NR preparation', 'State tax returns', 'Form 8843 filing', 'Tax treaty benefits'],
    link: '/services#filing',
  },
  {
    icon: TrendingUp,
    title: 'Tax Planning',
    description: 'Strategic tax planning to minimize your tax liability and maximize your returns throughout the year.',
    features: ['Year-round tax strategies', 'Estimated tax calculations', 'Deduction planning', 'Tax-efficient investments'],
    link: '/services#planning',
  },
  {
    icon: MessageSquare,
    title: 'Tax & Financial Consultancy',
    description: 'Expert guidance on tax matters, visa implications, and financial decisions for international students.',
    features: ['One-on-one consultations', 'Tax treaty guidance', 'Visa status implications', 'Financial advice'],
    link: '/services#consultancy',
  },
];

export function ServicesOverview() {
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax solutions tailored for non-resident students in the United States
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
