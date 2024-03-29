import Image from 'next/image'
import aniListLogo from '@/public/AniList_logo.png'

const Footer = () => {
  return(
    <>
      <div className=" max-phone:flex-col flex items-center justify-between mt-16 relative w-full py-4 px-6"> 
        <div className="max-phone:mb-6 flex items-center space-x-1"> 
          <p> Created with </p> 
          <a aria-label="Go to AniList API docs" href="https://anilist.gitbook.io/anilist-apiv2-docs/" className="anilink flex decoration-slate-700 underline" target="_blank"> 
            <Image alt="AniList Logo" src={aniListLogo} style={{width: '25px'}} className="aniimage mr-1"/> 
            AniList GraphQL API 
          </a>
        </div>
        <div className="flex space-x-8">
          <a aria-label="Go to source code" className="text-slate-700 bi bi-file-earmark-code-fill" href="https://github.com/amyyeung17/project4" target="_blank"></a>
          <a aria-label="Go to Github" className="text-slate-700 bi bi-github" href="https://github.com/amyyeung17" target="_blank"> </a>
          <a aria-label="Go to portfolio" className="text-slate-700 bi bi-folder-fill" href="https://www.ayeung.me" target="_blank"> </a>
          <a aria-label="Send an email" className="text-slate-700 bi bi-envelope-fill" href="mailto:amyyeung17@gmail.com" target="_blank"> </a>
        </div>
      </div>
    </>
  )
}

export default Footer