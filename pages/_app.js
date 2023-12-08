import '@/styles/globals.css'
import SessionProvider from '@/lib/getContext'
import Navbar from '@/components/navbar-og'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {

  return (
    <>
      <SessionProvider>
        <Navbar />
        <div className="flex-col-center mt-6"> 
          <div className="container flex-col-center justify-between max-w-screen-md lg:max-w-screen-lg min-h-screen mt-0.5 px-3 py-2 overflow-x-hidden">  
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </SessionProvider>
    </>
  )
}
