'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Last Updated: January 2026
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
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              MyTaxPlanners is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our tax services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Visa and immigration status information</li>
              <li>Tax-related documents and financial information</li>
              <li>Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)</li>
              <li>Income and employment information</li>
              <li>University or institution information</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Prepare and file your tax returns</li>
              <li>Provide tax planning and consultancy services</li>
              <li>Communicate with you about your tax matters</li>
              <li>Comply with legal obligations and IRS requirements</li>
              <li>Improve our services and customer experience</li>
              <li>Send you important updates and notifications</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Information Security</h2>
            <p className="text-gray-700 mb-6">
              We implement industry-standard security measures to protect your personal and financial information. This includes encryption, secure data storage, and restricted access to your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell or rent your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>With the IRS and state tax authorities as required for tax filing</li>
              <li>With our licensed CPAs and tax professionals who work on your behalf</li>
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Tax records are typically retained for a minimum of seven years as required by IRS regulations.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain processing of your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies and similar tracking technologies to improve your experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@mytaxplanners.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> MyTaxPlanners Privacy Office
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
