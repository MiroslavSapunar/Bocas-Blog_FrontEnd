//import { ApolloProvider } from '@apollo/client/react';
//import { client } from '../lib/apollo'
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <ApolloProvider client={client}>
    </ApolloProvider> */}
    </Layout>
  )
}

export default MyApp
