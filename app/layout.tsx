import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyTaxPlanners - Expert Tax Services for Non-Resident Students',
  description: 'Professional tax filing, planning, and consultancy services for non-resident students in the United States. Simplify your US tax returns with expert guidance.',
  keywords: 'tax filing, tax planning, non-resident student taxes, US tax returns, international student taxes, tax consultancy',
  authors: [{ name: 'MyTaxPlanners' }],
  openGraph: {
    title: 'MyTaxPlanners - Expert Tax Services for Non-Resident Students',
    description: 'Professional tax filing, planning, and consultancy services for non-resident students in the United States.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
