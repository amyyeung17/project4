
export const searchQuery =  `
query ($id: Int, $id_in: [Int], $id_not: Int, $id_not_in: [Int], $page: Int, $perPage: Int = 20, $search: String, $sort: [StaffSort] = [ROLE]) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    staff (id: $id, search: $search, id_not: $id_not, id_in: $id_in, id_not_in: $id_not_in, sort: $sort) {
      id
      name {
        first
        middle
        last
        full
        native
      }
      image {
        medium
      }
      languageV2
      primaryOccupations
      gender
      dateOfBirth {
        year
        month
        day
      }
      age
      yearsActive
      siteUrl
      characters(sort: [FAVOURITES_DESC]) {
        nodes {
          id 
          name {
            full
            native
          }
          image {
            medium
          }
          siteUrl
          media {
            nodes {
              id 
              title {
                romaji
                english
                native
              }
              coverImage {
                medium
              }
              siteUrl
            }
          }
        }
      }
    }
  }
}
`

export const actorQuery = `
query ($id: Int, $id_in: [Int], $id_not: Int, $id_not_in: [Int], $sort: [StaffSort]) {
  Staff (id: $id, id_in: $id_in, id_not: $id_not, id_not_in: $id_not_in, sort: $sort) {
    id 
    name {
      full
      native
    }
    image {
      medium
    }
    siteUrl
    age
    homeTown
    languageV2
    yearsActive
    characters(sort: [FAVOURITES_DESC], perPage: 20, page: 1) {
      nodes {
        id 
        name {
          full 
          native
        }
        siteUrl
        image {
          medium
        }
        media(sort: [START_DATE]) {
          nodes {
            id
            title {
              english
              native
            }
            format
            coverImage {
              medium
            }
            siteUrl
          }
        }
      }
      
    }
  }
}
`


export const similarQuery =  `
query($id: Int) {
  Media(id: $id) {
    id
    title {
      english
      native
    }
    characters(sort: [FAVOURITES_DESC], perPage: 20, page: 1) {
      edges {
        node {
          id
          name {
            full
            native
          }
        }
        voiceActors {
          id
          name {
            full
            native
          }
          image {
            medium
          }
          languageV2
          siteUrl
        }
      }
    }
  }
}
`


export const getQuery = ({type, ...props}) => {
  let variables = {}

  switch(type) {
    case 'SEARCH':
      variables = {search: props.searchInput}
      break
    default:
      break
  }
  return JSON.stringify({query: search, variables})
}