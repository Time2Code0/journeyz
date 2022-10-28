import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charSet="UTF-8" />
        <title>JourneyZ</title>
        <meta name="description" content="Super cool Course Platform" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
