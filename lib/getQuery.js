
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
        large
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
      characters(sort: [FAVOURITES_DESC], perPage: 21) {
        nodes {
          id 
          name {
            full
            native
          }
          image {
            large
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
                large
              }
              siteUrl
              format
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
      large
    }
    siteUrl
    age
    homeTown
    languageV2
    yearsActive
    characters(sort: [FAVOURITES_DESC], perPage: 21, page: 1) {
      nodes {
        id 
        name {
          full 
          native
        }
        siteUrl
        image {
          large
        }
        media(sort: [START_DATE]) {
          nodes {
            id
            title {
              english
              native
              romaji
            }
            format
            coverImage {
              large
            }
            siteUrl
          }
        }
      }
      
    }
  }
}
`

export const mergedQuery = `
query ($id: Int, $id_in: [Int], $id_not: Int, $id_not_in: [Int], $sort: [StaffSort]) {
  Staff (id: $id, id_in: $id_in, id_not: $id_not, id_not_in: $id_not_in, sort: $sort) {
    id 
    name {
      full
      native
    }
    image {
      large
    }
    siteUrl
    age
    homeTown
    languageV2
    yearsActive
    staffMedia {
      nodes {
        media {
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
                  large
                }
                languageV2
                siteUrl
              }
            }
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
            large
          }
          languageV2
          siteUrl
        }
      }
    }
  }
}
`

export const searchShowQuery = `
query($page: Int, $perPage: Int = 20, $search: String, $format_in: [MediaFormat] = [TV, TV_SHORT, MOVIE, SPECIAL, OVA, ONA], $sort: [MediaSort] = [POPULARITY_DESC]){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(search: $search, format_in: $format_in, sort: $sort) {
      id
      title {
        english
        native
        romaji
      }
      coverImage {
        large
      }
    }
  }
}
`

export const showQuery = `
query($id: Int){
  Media(id: $id) {
    id
    title {
      english
      native
      romaji
    }
    coverImage {
      large
    }
    countryOfOrigin
    description
    endDate {
      year
      month
      day
    }
    genres
    episodes
    format
    genres
    seasonInt
    siteUrl
    startDate {
      year
      month
      day
    }
    synonyms

    characters(sort: [FAVOURITES_DESC], perPage: 20, page: 1) {
      edges {
        node {
          id
          name {
            full
            native
          }
          image {
            large
          }
          siteUrl

        }
        voiceActors {
          id
          name {
            full
            native
          }
          image {
            large
          }
          languageV2
          siteUrl
        }
      }
    }
  }
}
`

export const trendShowQuery = `
query($page: Int = 1, $perPage: Int = 25, $format_in: [MediaFormat] = [TV, TV_SHORT, MOVIE, SPECIAL, OVA, ONA]){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
     media(sort: [TRENDING_DESC], format_in:$format_in) {
        id
        title {
          english
          native
          romaji
        }
        format
        coverImage {
          large
        }
  	}
  }
 
}

`

export const trendActorQuery = `
query($page: Int = 1, $perPage: Int = 25, $format_in: [MediaFormat] = [TV, TV_SHORT, MOVIE, SPECIAL, OVA, ONA]){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
     media(sort: [TRENDING_DESC], format_in: $format_in) {
        id
        characters(sort: [FAVOURITES_DESC], perPage: 10, page: 1) {
          edges {
            node {
              id
              name {
                full
                native
              }
            }
            voiceActors(sort: [RELEVANCE]) {
              id
              name {
                full
                native
              }
              image {
                large
              }
              languageV2
              siteUrl
            }
          }
        }
  	}
  }
}

`

export const getQuery = ({type, ...props}) => {
  let variables = {search: props.searchInput}
  return JSON.stringify({query: search, variables})
}