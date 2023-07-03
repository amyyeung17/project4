import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title> VA </title>
        <meta name="description" content="Find works voice actors have in common" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <main className="flex-col-center h-screen justify-center main">
        <h1 className="mb-4 text-4xl md:text-5xl text-slate-700"> Voice Actor Search </h1>
        <p className="mb-2 text-center text-xl md:text-2xl"> Discover new works and voice actors through your favorite voice actors </p>
        <Link className="btn--main rounded-lg my-4 px-8 py-2 text-lg" href="/select"> Begin </Link>
      </main>
    </>
  )
}
