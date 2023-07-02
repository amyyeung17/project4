import { useEffect, useContext, useState } from 'react'
import { SessionContext } from '@/lib/getContext'
import { apiHeaders }from '@/lib/getHeaders'
import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import SearchInput from '@/components/search-input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [access_token, setToken] = useContext(SessionContext).token
  const [request, setRequest] = useState(false)
  const [input, setInput] = useState('')
 
  useEffect(() => {
    const getRequest = async () => {
      try {
        //const data = await fetch('/api/authenticate', apiHeaders({method: 'POST'})).then(r => r.json())
        //setToken(data.access_token)
      } catch (err) {
        console.log(err)
      }
    }

    if (request) {
      getRequest()
    }
  }, [request])

  return (
    <>
      <Head>
        <title> VA </title>
        <meta name="description" content="Find works voice actors have in common" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" className="flex-col-center justify-center h-screen">
        <h1 className="mb-4 text-4xl md:text-5xl text-slate-700"> Voice Actor Search </h1>
        <p className="mb-2 text-center text-xl md:text-2xl"> Discover new works and voice actors through your favorite voice actors </p>
        <Link className="btn--main rounded-lg my-4 px-8 py-2 text-lg" href="/select"> Begin </Link>
      </main>
    </>
  )
}
