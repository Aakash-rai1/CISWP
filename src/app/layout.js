import { Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'CISWP Website',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='{inter.className} mt-20'>
        <Navbar/>
       {children}
       
        </body>
    </html>
  )
}
