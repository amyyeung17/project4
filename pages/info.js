const Info = () => {
  return(
    <>
      <div className="flex flex-col prose"> 
        <h2> Info </h2>
        <p> Updated: 7/2/23 </p>
        <h3> To-dos </h3>
        <ul>
          <li> Clean up code and design, especially making things consistent - first iteration </li>
          <li> Consolidate parts of some of the larger components into separate components </li>
          <li> Show more/less for info in actor&apos;s profile - DONE </li>
          <li> Add link for actor in profile - DONE </li>
          <li> Line-clamp - DONE</li>
          <li> Fix temporary heights for divs in select-tempItem - DONE </li>
          <li> Intergrate other APIs</li>
          <li> Add appropriate headers for pages  </li>
          <li> Add appropriate credits and notices (ex. directing to the original source of info for more info) </li>
          <li> Fix eslint errors for using @apply </li>
          <li> Merge repeated similar style classes and move to separate stylesheet </li>
          <li> Change functions to objects for any dynamic styles </li>
          <li> Session for saving inputs during refreshes (next-session?) </li>
          <li> Results </li>
          <ul>
            <li> Voice actors from the shows that selected voice actors both act in </li>
            <li> Shows based selected voice actors and similar  </li>
            <li> Cross-language shared roles</li>
            <li> 2+ voice actor selection </li>
          </ul>
        </ul>
        <h3> Updates </h3>
        <ul>
          <li> 5/3</li>
          <ul> 
            <li> Fixed significant amounts of sizing issues </li>
            <li> Updated spacing in match and select page </li>
            <li> Made interactions with UI elements more consistent </li>
            <li> Prevent adding more than allowed options and can remove in search </li>
            <li> Updates grid size in actors page when window resizes to even out results </li>
          </ul>
          <li> 7/2 </li>
          <ul> 
            <li> Cleared up some redundant code </li>
            <li> Cleaned up some of the UX </li>
          </ul>
        </ul>
        <h3> Future goals </h3>
        <ul> 
          <li> Error-handling </li>
          <li> Adding trending artists in search page </li>
          <li> Work on features from Results section above </li>
          <li> Prevent access to match page when conditions aren&apos;t met </li>
        </ul>
      </div>
    </>
  )
}

export default Info