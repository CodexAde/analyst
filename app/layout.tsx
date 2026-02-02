import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Loader from './components/Loader/index';

export const metadata = {
  title: 'Ramanti Capitals',
  description: 'SEBI Certified Research Analyst & Investment Experts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
