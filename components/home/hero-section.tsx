'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simplify Your US Tax Returns as a{' '}
              <span className="text-emerald-400">Non-Resident Student</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Expert tax filing, planning, and consultancy services designed specifically
              for international students in the United States.
            </p>

            <div className="space-y-3 mb-8">
              {['CPA-led professional guidance', 'Student-friendly pricing', 'Fast turnaround time'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/start-filing">
                <Button size="xl" variant="secondary" className="group">
                  Start Filing Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30">
                    <h3 className="font-semibold mb-2">Quick Process</h3>
                    <p className="text-sm text-gray-300">File your taxes in just 3 easy steps</p>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold mb-2">Expert Support</h3>
                    <p className="text-sm text-gray-300">Guidance from experienced tax professionals</p>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold mb-2">Stress-Free</h3>
                    <p className="text-sm text-gray-300">We handle the complexity for you</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
