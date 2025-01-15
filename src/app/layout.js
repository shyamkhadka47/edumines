import './globals.scss';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='flex flex-col min-h-screen justify-between'>
        <Navbar />
        {children}
        <Footer />
        </main>
        </body>
    </html>
  );
}
