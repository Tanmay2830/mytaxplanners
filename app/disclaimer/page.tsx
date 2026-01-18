'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
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
              Legal Disclaimer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Important information about our services and limitations
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
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Important Notice</h3>
                <p className="text-yellow-800 text-sm">
                  Please read this disclaimer carefully before using our services. By using MyTaxPlanners services, you acknowledge and agree to the terms outlined below.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Professional Services</h2>
            <p className="text-gray-700 mb-6">
              MyTaxPlanners provides tax preparation, planning, and consultancy services through licensed tax professionals. While our team includes experienced CPAs and tax experts, the information and services provided should not be construed as legal, immigration, or financial advice beyond the scope of tax preparation.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Accuracy and Completeness</h2>
            <p className="text-gray-700 mb-6">
              We strive to ensure the accuracy and completeness of all tax returns and information provided. However, the accuracy of your tax return depends on the accuracy and completeness of the information you provide to us. You are responsible for providing true, accurate, and complete information. We are not responsible for errors resulting from incomplete or inaccurate information provided by clients.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">IRS and Tax Authority Decisions</h2>
            <p className="text-gray-700 mb-6">
              While we prepare your tax returns in accordance with current tax laws and regulations, we cannot guarantee specific outcomes with the IRS or state tax authorities. The IRS has the authority to review, audit, or challenge any tax return. We are not responsible for any IRS or state tax authority decisions, adjustments, or penalties, though we will work with you to address any issues that arise.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Visa and Immigration Status</h2>
            <p className="text-gray-700 mb-6">
              Our services focus on tax matters related to non-resident status. We do not provide immigration advice or legal counsel regarding visa status, immigration applications, or visa compliance. Clients should consult with qualified immigration attorneys for immigration-related matters. Tax filing does not affect your visa status, but you should ensure compliance with all visa requirements independently.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Changes in Tax Laws</h2>
            <p className="text-gray-700 mb-6">
              Tax laws and regulations change frequently. While we stay informed of current tax law changes, we cannot anticipate or be held responsible for retroactive changes or new interpretations of tax laws by the IRS or courts that may affect previously filed returns.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Refund Estimates</h2>
            <p className="text-gray-700 mb-6">
              Any estimates of tax refunds or amounts owed are preliminary and subject to change based on final calculations and IRS processing. We do not guarantee specific refund amounts or timelines. Refund processing times are determined by the IRS and are beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, MyTaxPlanners and its employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our liability is limited to the fees paid for our services.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">No Attorney-Client Relationship</h2>
            <p className="text-gray-700 mb-6">
              Use of our tax services does not create an attorney-client relationship. For legal advice, please consult with a qualified attorney.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Third-Party Links and Resources</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites and resources. We are not responsible for the content, accuracy, or practices of third-party sites. Links are provided for convenience only and do not constitute endorsement.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a client, you are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining copies of your tax returns and supporting documents</li>
              <li>Reporting all income from all sources</li>
              <li>Reviewing your tax return before it is filed</li>
              <li>Understanding your tax obligations and filing deadlines</li>
              <li>Responding to IRS notices or correspondence in a timely manner</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Modifications</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this disclaimer, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@mytaxplanners.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
