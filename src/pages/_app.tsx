import '@/styles/tailwind.css'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Layout from '../components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ImmVis</title>
        <meta name="description" content="Homepage to ImmVis and AppVis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="ImmVis" />
        <meta property="og:description" content="Homepage to ImmVis and AppVis" />
        <meta property="og:image" content="https://immvis.github.io/content/about/immersiv-visualisering-MIT-LiU.jpg" />
        <meta property="og:image:secure_url" content="https://immvis.github.io/content/about/immersiv-visualisering-MIT-LiU.jpg" />
        <meta property="og:url" content="https://immvis.github.io/content/about/immersiv-visualisering-MIT-LiU.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
