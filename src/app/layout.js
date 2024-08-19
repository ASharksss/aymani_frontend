import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeContext, ThemeContextProvider } from '@/contexts/ThemeContext'
import ThemeProvider from '@/provider/ThemeProvider'

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
      </ThemeProvider>
    </ThemeContextProvider>
    </body>
    </html>
  )
}
