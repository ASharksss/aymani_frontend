'use client'

import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeContextProvider} from '@/contexts/ThemeContext'
import ThemeProvider from '@/provider/ThemeProvider'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import BottomMenu from "@/components/layout/bottom-menu/BottomMenu";
import axios from 'axios';
import {Provider} from "react-redux";
import {makeStore} from "@/redux/lib/store";

const inter = Inter({subsets: ['latin']})

axios.defaults.baseURL = 'http://192.168.1.121:5000/api/'

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
            <Provider store={makeStore()}>
            <ThemeContextProvider>
                <ThemeProvider>
                    <Header/>
                    {children}
                    <div className="bottom-menu">
                        <BottomMenu/>
                    </div>
                    <Footer/>
                </ThemeProvider>
            </ThemeContextProvider>
            </Provider>
        </body>
        </html>
    )
}
