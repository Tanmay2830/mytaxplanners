'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to File Your Taxes?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let tax season stress you out. Let our experts handle your returns
            while you focus on your studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-filing">
              <Button size="xl" variant="secondary" className="group">
                Start Filing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Questions? Our team is here to help. Reach out anytime!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
