import '../styles/globals.css'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Router from 'next/router'

export default function App({ Component, pageProps }) {
    return (
      <>
      <Navbar />
      <Component {...pageProps} />
      </>
    )
}
