import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const mainFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Bambe Center — Mental Wellness & Support for Rwanda',
  description: 'A modern, accessible, bilingual (English & Kinyarwanda) mental wellness website for Rwanda. You don\'t have to go through it alone.',
  keywords: ['mental health Rwanda', 'mental wellness Rwanda', 'counselling Rwanda', 'Kigali support', 'Rwanda wellness'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${mainFont.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#1F2933] antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
