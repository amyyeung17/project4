const SearchSubheader = ({ availResults, current, searchInput, type}) => {
  return(
    <>
      <div className="grids w-full md:max-w-[46rem] lg:max-w-[61.75rem]">
        <p className="whitespace-nowrap max-sm:max-w-[10rem] sm:max-w-[12rem]">
          {availResults.length !== 0 ?
            (current === 0 ?
                <> Trending {type} today: </>
              :
                ((current === 1 && searchInput !== '') && <>Showing results for <span className="font-bold text-triadic text-lg"> <b> &apos;{searchInput}&apos; </b></span> </>)
            )
            :
            (current === 2 && <> Your {type} selection: </>)
          }
        </p>
      </div>
    </>
  )
}

export default SearchSubheader