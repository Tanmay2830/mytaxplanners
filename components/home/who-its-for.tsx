'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Briefcase, Users } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'F-1 Students',
    description: 'International students on F-1 visas studying in the United States',
  },
  {
    icon: BookOpen,
    title: 'J-1 Exchange Visitors',
    description: 'Exchange visitors and scholars on J-1 visas',
  },
  {
    icon: Briefcase,
    title: 'OPT/CPT Workers',
    description: 'Students working on Optional or Curricular Practical Training',
  },
  {
    icon: Users,
    title: 'Other Non-Residents',
    description: 'Other non-resident aliens requiring tax assistance',
  },
];

export function WhoItsFor() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Designed for Non-Resident Students
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in helping international students and non-resident aliens
            navigate the complexities of US tax filing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <audience.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
