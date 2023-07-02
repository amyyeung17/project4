import Link from 'next/link'

const Navbar = () => {
  const linkStyle = 'hover:opacity-80 font-medium text-slate-700 px-2 py-1'
  return(
    <>
      <div className="border-b-2 border-zinc-100 w-full overflow-x-hidden">
        <div className="container mx-auto px-3 py-2">
          <div className="flex gap-x-4 max-sm:justify-center justify-end max-sm:space-x-2 w-full">
            <Link className={linkStyle} href="/"> Home </Link>
            <Link className={linkStyle} href="/select"> Match </Link>
            <Link className={linkStyle} href="/search"> Search </Link>
            <Link className={linkStyle} href="/info"> Info </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar