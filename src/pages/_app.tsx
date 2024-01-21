import Menu from '@/components/modules/Menu/Menu'
import Navbar from '@/components/modules/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Menu/>
    <Component {...pageProps} />
  </>
}
