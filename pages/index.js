import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { SessionContext } from '@/lib/getContext'

export default function Home() {
  const [_, setSelected] = useContext(SessionContext).choices
  const [prevPath, setPrev] = useContext(SessionContext).prev

  useEffect(() => {
    setSelected({actor: [], show: []})
    setPrev('')
  }, [])
  

  return (
    <>
      <Head>
        <title> VA </title>
        <meta name="description" content="Find works voice actors have in common" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <main className="flex-col-center h-screen justify-center main">
        <h1 className="mb-4 text-4xl md:text-5xl text-slate-700"> Voice Actor Search </h1>
        <p className="mb-2 text-center text-xl md:text-2xl w-4/5"> Discover shared works between your favorite voice actors and common actors in shows. </p>
        <Link className="btn--main rounded-lg my-4 px-8 py-2 text-lg" href="/search"> Begin </Link>
      </main>
    </>
  )
}
