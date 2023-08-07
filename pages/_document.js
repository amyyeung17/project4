import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
      <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' />
      <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
