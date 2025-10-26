import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/organisms/Footer';
import { Navbar } from '../components/organisms/Navbar';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gocart | Minimalist Fashion Store',
  description: 'Discover Gocart — a minimalist fashion store for modern essentials',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-gray-900`}>
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
