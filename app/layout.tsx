import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar/Navbar'
import ClientOnly from './component/ClientOnly'
import RegisterModal from '@/app/component/modal/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './component/modal/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Made by MAAZ',
}
const Font=Nunito({
  subsets:["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser= await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <ClientOnly>
        <ToasterProvider/>
        <LoginModal />

<RegisterModal />
      <Navbar currentUser={currentUser}/>
      </ClientOnly>
      
      {children}

      </body>
    </html>
  )
}
