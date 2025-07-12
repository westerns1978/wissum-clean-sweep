import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Jenny's Wissum Sweep - Spotless Navarre Cleans!",
  description: 'Professional Airbnb and residential cleaning services in Navarre, FL. Featuring Sissy Girl, our beloved Siberian Husky mascot.',
  keywords: 'cleaning service, Navarre FL, Airbnb cleaning, residential cleaning, Gulf Coast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  );
}
