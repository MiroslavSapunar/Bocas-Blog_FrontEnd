//import { gql } from '@apollo/client'
//import { client } from '../lib/apollo'
import Home from '../components/Home'
import styles from '../styles/Home.module.css'

import postsJson from  '../public/posts.json'

export default function Root({ posts }) {

  const home = `
  # Hola
  ## Subtitulo

  todo bien??`

  return (
    <Home posts={posts} home={home} />
  )
}

export async function getStaticProps(contex) {
  const resPosts = postsJson
  return {
    props: {
      posts: resPosts
    }
  }
}