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
  import RentModal from './component/modal/RentModal'
import SearchModal from './component/modal/SearchModal'
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
      <body className={inter.className}>
      <ClientOnly>
        <ToasterProvider/>
        <SearchModal/>
        <RentModal/>
        <LoginModal />

<RegisterModal />
      <Navbar currentUser={currentUser}/>
      </ClientOnly>
      <div className='pb-20 pt-28'>


      {children}
      </div>
      </body>
    </html>
  )
}
