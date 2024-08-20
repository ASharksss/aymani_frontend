import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import ThemeProvider from '@/provider/ThemeProvider'
import Footer from '@/components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'АЙМАНИ | AIMANI',
  description: 'Заказать сайт просто',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="ru">
    <body className={inter.className}>
    <ThemeContextProvider>
      <ThemeProvider>
        {children}
        <Footer/>
      </ThemeProvider>
    </ThemeContextProvider>
    </body>
    </html>
  )
}
