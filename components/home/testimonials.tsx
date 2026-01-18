'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'F-1 Student, Computer Science',
    university: 'Stanford University',
    content: 'MyTaxPlanners made my first US tax filing experience stress-free. They explained everything clearly and helped me claim treaty benefits I didn\'t even know about!',
    rating: 5,
  },
  {
    name: 'Wei C.',
    role: 'J-1 Exchange Student',
    university: 'MIT',
    content: 'Fast, professional, and affordable. I was worried about filing taxes on OPT, but their team guided me through every step. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Ahmed M.',
    role: 'F-1 Student, Business',
    university: 'NYU',
    content: 'The best tax service for international students. They understand non-resident tax rules perfectly and their pricing is very student-friendly.',
    rating: 5,
  },
  {
    name: 'Maria L.',
    role: 'F-1 Student, Engineering',
    university: 'UC Berkeley',
    content: 'I\'ve used their services for two years now. They\'re consistent, reliable, and always available to answer questions. Makes tax season much less stressful!',
    rating: 5,
  },
];

export function Testimonials() {
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
            What Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied international students who trust us with their taxes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-emerald-600">{testimonial.university}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
