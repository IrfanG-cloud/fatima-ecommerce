
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from './components/Provider'


export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body >
        <Providers>
          <Header />
          {children}
          
          <Footer />
        </Providers>
        </body>
    </html>
    </ClerkProvider>
  )
}
