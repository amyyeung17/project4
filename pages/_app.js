import Head from 'next/head'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import SessionProvider from '@/lib/getContext'
import Navbar from '@/components/navbar-og'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  const { route } = useRouter()
  return (
    <>
      <Head>
        <title> { route !== '/' ? route.charAt(1).toUpperCase() + route.slice(2) : 'Voice Actor Match' } </title>
        <meta name="description" content="Discover new work and voice actors through your favorite voice actors" />
      </Head>
      <SessionProvider>
        <Navbar />
        <div className="flex-col-center mt-6"> 
          <div className="container flex-col-center justify-between max-w-screen-md lg:max-w-screen-lg min-h-screen mt-0.5 px-3 py-2 overflow-x-hidden">  
              <main className="h-full w-full"> 
                <Component {...pageProps} />
              </main>
            <Footer />
          </div>
        </div>
      </SessionProvider>
    </>
  )
}
