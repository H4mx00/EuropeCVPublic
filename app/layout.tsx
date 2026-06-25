import type {Metadata} from 'next';
import { Inter, Fredoka } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'EuropeCV - Resume ATS Checker',
  description: 'Improve your resume for ATS and get actionable recommendations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
