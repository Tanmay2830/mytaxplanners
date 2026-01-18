'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Users,
    title: 'Student-First Approach',
    description: 'We understand the unique challenges international students face and tailor our services to meet your specific needs.',
  },
  {
    icon: Award,
    title: 'Expert Excellence',
    description: 'Our team includes licensed CPAs and tax professionals with extensive experience in non-resident taxation.',
  },
  {
    icon: Heart,
    title: 'Transparency & Trust',
    description: 'Clear pricing, honest communication, and ethical practices in everything we do.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We stay updated with the latest tax laws and continuously improve our services to serve you better.',
  },
];

const stats = [
  { number: '1000+', label: 'Students Served' },
  { number: '50+', label: 'Universities' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '5-7', label: 'Days Turnaround' },
];

export default function AboutPage() {
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
              About MyTaxPlanners
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for non-resident student tax services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              MyTaxPlanners was founded with a simple mission: to make US tax filing simple,
              affordable, and stress-free for international students. We recognized that non-resident
              students face unique tax challenges that traditional tax services often overlook or
              mishandle.
            </p>
            <p className="text-gray-700 mb-4">
              As former international students ourselves, we experienced firsthand the confusion
              and anxiety that comes with navigating US tax laws on a student visa. That's why we
              created a service specifically designed to address the needs of non-resident students.
            </p>
            <p className="text-gray-700">
              Today, we're proud to serve thousands of students from universities across the United
              States, helping them file their taxes correctly, claim all eligible benefits, and
              achieve peace of mind during tax season.
            </p>
          </motion.div>
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
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're driven by a commitment to excellence and a passion for helping students succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
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
            className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
              <p className="text-gray-300">Our impact on the student community</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Join Thousands of Satisfied Students
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with tax professionals who truly understand
              your needs as an international student.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-filing">
                <Button size="xl" variant="secondary">
                  Start Filing Today
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
