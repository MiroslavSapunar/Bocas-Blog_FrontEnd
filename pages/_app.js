import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout/Layout';

import { tokens } from '../utils/rest'

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  //console.log(tokens.google_tag)

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-DNVVG9NRTY' })
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
