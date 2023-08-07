## 3-27-2023
### Sources
- [React Typescript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)
- [React hooks & TypeScript](https://dev.to/wpreble1/typescript-with-react-functional-components-4c69)
- [Functional components & Typescript -> inferred props](https://fettblog.eu/typescript-react/components/)
- [Server & Client components for Next.js (using /app)](https://beta.nextjs.org/docs/rendering/server-and-client-components)
  - [Detailed official documentation](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#avoiding-an-uncanny-valley-between-server-and-client)
- [IGDB api](https://api-docs.igdb.com/?shell#getting-started)
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set)
- [Objects with known and unknown properties](https://stackoverflow.com/questions/71441015/typing-objects-with-unknown-properties-in-typescript-how-to-do-it-properly)
- [Module.exports error](https://stackoverflow.com/questions/62351433/how-to-fix-this-typescript-file-is-not-a-module-error)
- [React server components](https://github.com/vercel/app-playground/blob/main/pages/cert/product/%5Bid%5D.tsx)
- [Server component tutorial](https://makerkit.dev/blog/tutorials/next-server-components)
- [Official React Demo](https://github.com/reactjs/server-components-demo)
- [Update refetch sequence](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#update-refetch-sequence)
- [Random link for full-stack app](https://www.thisdot.co/blog/building-full-stack-react-apps-with-next-js-api-routes)
- [Mutating Data](https://beta.nextjs.org/docs/data-fetching/mutating)
### Learned 
- DRY with exports with TypeScript
- Default with /app is server components
- process.env.var have to be named PUBLIC_NEXT_....
- api routes in /app must be defined as route, etc (check) -> export GET, POST...
- Basics of TypeScript


## 3-28-2023
### Learned
- Res.json() with fetch().then() -> always await res.json() otherwise retunrs a Promise
- export default for arrow functions must be done after declared 
- {} - named imports only 
- createContext, export ContextProvider with state, pass children component through, useContext(createContext) [source](https://stackoverflow.com/questions/70071227/state-management-in-nextjs)
### Sources 
- [Route handlers /app beta](https://beta.nextjs.org/docs/routing/route-handlers)
  - [Another source](https://blog.kieranroberts.dev/getting-started-with-nextjs-api-routes)
  - [API response headers](https://nextjs.org/docs/api-routes/response-helpers)
- [Data fetching with /app beta](https://beta.nextjs.org/docs/data-fetching/fetching)
- [Server components Next.js tutorial](https://dev.to/zenstack/fun-with-nextjs-13-server-components-o37)
[Edge API](https://nextjs.org/docs/messages/middleware-upgrade-guide)
- [NextResponse](https://beta.nextjs.org/docs/api-reference/response#cookies)
- [NextRequest](https://nextjs.org/docs/api-reference/next/server#nextrequest)
- [Wikipedia REST API](https://public-paws.wmcloud.org/User:APaskulin_(WMF)/en-wikipedia-search.ipynb)
- [Seiyuu Database (not updated)](http://www.usagi.org/doi/seiyuu/index.html)
- [Jikan documentation](https://docs.api.jikan.moe/)
### Unresolved issues 
- Using [next-session](https://www.npmjs.com/package/next-session#session-store) || [cookies-next](https://www.npmjs.com/package/cookies-next) -> issue with res.getHeader || res.setHeader
  - [Middleware tutorial](https://reacthustle.com/blog/next-js-set-cookie-server-side)
  - [Beta /app Next.js & Cookies](https://stackoverflow.com/questions/74440629/how-to-get-cookies-in-next-js-13-beta-in-server-side-rendering)
### Todo
- [Iron session state management](https://www.npmjs.com/package/iron-session)
- [UseSWR - client side data fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side)
- Authentication Next.js
- Middleware - clarify cookies, sessions, and etc 

## 3-30-23

### Learned 
- GET retrieves data & POST sends data and may modify the server 
- Vanilla JS Fetch [source](https://gomakethings.com/how-to-send-data-to-an-api-with-the-vanilla-js-fetch-method/)
- Headers (content-type:x-www-form-urlencoded & application/JSON) [source1](https://github.com/github/fetch/issues/635) -> need to JSON.stringify() and JSON.parse() if content type is JSON (returns a string with JSON.stringify)
  - Express url-encoded [source](https://stackoverflow.com/questions/61334553/req-body-is-undefined-while-post-request-through-fetch-api)


## 4-3-23
### Learned 
- Promise.all -> parallel fetch
- Map - returns, returns a new array
- filter - returns a new array
- Thorttled-queue - library for throttling api-requests 
- GraphQL Basics
  - Commenting uses #
  - Arguments - can be used within fields
    - (arg: value) - static value 
    - ($arg: type) - dynamic ($arg is passed)
  - Aliasing 
    - ex. character1: type(arg: val1) {}, character2: type(arg: val2) {}
  - Fragment 
    - fragment fields** on Type { declare fields here }
    - character1: type(arg: va1) {... fields}
    - Inline -> ... { ...on X { function1 } ...on Y { function2 }} returns fields based on the returned type
  - Operation
    - Types - query, mutation, subscription
    - Name - meaningful name giving 
  - Variables (default use = after value)
  - Directives 
    - @include(if: ), @skip(if: )
  - Mutations are sequential 
  - __typename (returns type with response)
  - type - graphQL object type, fields, String! (non-nullable), [ String! ] (non-nullable items if list exists, list || array can be null)
    - Query, Mutation - every schema has type query, maybe mutation
    - Scalar (leaves of the query, no sub-fields) - Int, Float, String, Boolean, ID (unique identifier - serialized in the same way as string), can implement custom
  - Enums (enum Name) - validate arg of type(s) || declare finite set of types that are allowed 
  - Interfaces (interface Name) - type ... implements Name -> the declared object type must have all of the same arguments and return types as Name
    - Useful for return object or set of objects of different types 
  - Union - object types that do not share same fields.. etc, must be used with __typename with inline fragments 
    - Must be concrete object types, not other unions or interfaces 
  - input types, passing complex objects 
    - input Name {....}
    - no arguments on field, can set values directly tho fieldName: ValueType = F
    - Good for mutations & different operations 
    - Abstract types do not apply
    - query parameters
- Payload - data transportation to the server at user request 
- JSON.stringify - ensures all keys are strings, functions || undefined || etc -> null, resolves new instances such as new Date()

### Sources
- Previous AniList GraphQL Projects [source1](https://github.com/doongs/seiyuusauce), [source2](https://medium.com/nerd-for-tech/how-to-fetch-data-from-the-anilist-api-graphql-using-axios-77527efc8a89)
- Differences between input and object type in GraphQL [source](https://stackoverflow.com/questions/41743253/whats-the-point-of-input-type-in-graphql)
- [Example site](https://seiyuu.moe/seiyuu)


### Todo
- Resolving sequential promises [source1](https://gist.github.com/anvk/5602ec398e4fdc521e2bf9940fd90f84) [source2](https://medium.com/hackernoon/functional-javascript-resolving-promises-sequentially-7aac18c4431e)
- GraphQL - mutations, fragments 
  - [Anilist GraphQl](https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started) [source2](https://medium.com/nerd-for-tech/how-to-fetch-data-from-the-anilist-api-graphql-using-axios-77527efc8a89)
  - [General GraphQl Tutorial](https://graphql.org/learn/queries/#fields)
  - [Netlify GraphQl Tutorial](https://www.netlify.com/blog/2020/12/21/send-graphql-queries-with-the-fetch-api-without-using-apollo-urql-or-other-graphql-clients/)
- [AbortController](https://stackoverflow.com/questions/46946380/fetch-api-request-timeout)
- Serialization 
- Signed bits 
- Error handling


### Unresolved 
- GraphQL POST 
  - [resource1](https://www.apollographql.com/blog/graphql/basics/making-graphql-requests-using-http-methods/)
  - [POST body & content type](https://graphql.org/learn/serving-over-http/#post-request)


## 4-4-23

### Resolved
- Fixed the POST issue, now is able to receive the appropriate response 

### Resource
- [Apollo - how to use graphql with js](https://www.apollographql.com/blog/graphql/how-to-use-graphql-with-javascript-graphql-js-tutorial/)
- [Schema defined languages](https://www.apollographql.com/docs/kotlin/essentials/file-types/#sdl-schemas-graphqls)
- [Alternative methods to call GraphQL api](https://www.apollographql.com/blog/graphql/examples/4-simple-ways-to-call-a-graphql-api/)


## 4-9-23

### Learned 
- [Router.isready Next.js for retrieving query from url, initial is empty](https://github.com/vercel/next.js/discussions/12661)


## 4-12-23

### Resolved
- [Image sizing with next, requires positive relative](https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height)

### Learned 
- [debounce vanillaJs](https://www.joshwcomeau.com/snippets/javascript/debounce/)


## 4-14-23
### Learned 
- const {key, ...val} = currentObject, returns val without key

### Unresolved
- [Router history with next.js](https://github.com/vercel/next.js/discussions/36723)


## 4-17-23
### Learned
- [Map to Array of objects](https://stackoverflow.com/questions/56795743/how-to-convert-map-to-array-of-object)
- [Array.from vs. spread operator](https://stackoverflow.com/questions/40548213/array-from-vs-spread-syntax)
- [Set with O(1) find](https://stackoverflow.com/questions/55057200/is-the-set-has-method-o1-and-array-indexof-on)
- [Array to set](https://stackoverflow.com/questions/28965112/javascript-array-to-set)
- [Array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Spread operator with objects that have the same keys](https://stackoverflow.com/questions/46121420/es6-destructuring-two-objects-with-same-property-name)


