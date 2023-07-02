import '@/styles/globals.css'
import SessionProvider from '@/lib/getContext'
import Navbar from '@/components/Navbar'
export default function App({ Component, pageProps }) {

  return (
    <>
      <SessionProvider>
        <Navbar />
        <div className="w-full"> 
          <div className="container flex-col-center justify-between max-w-screen-md min-h-screen mx-auto mt-0.5 px-3 py-2 overflow-x-hidden">  
            <Component {...pageProps} />
            <div className="flex-col-center mt-6 py-2"> 
              <p> Created with <a href="https://anilist.gitbook.io/anilist-apiv2-docs/" className="a-general" target="_blank"> AniList API </a></p>
              <div className="flex mt-3 space-x-10">
                <a href="" target="_blank"> <span className="bi bi-github"></span></a>
                <a href="https://www.ayeung.me" target="_blank"> <span className="bi bi-folder-fill"></span></a>
                <a href="mailto:amyyeung17@gmail.com" target="_blank"> <span className="bi bi-envelope-fill"></span></a>
              </div>
            </div>
          </div>
        </div>
      </SessionProvider>
    </>
  )
}
