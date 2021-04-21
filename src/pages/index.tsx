import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Posts from '../components/Posts'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Welcome to Next.JS</h1>
        <p>React + Typescript + NextJs + Eslint + Styled Components</p>
        <Posts />
      </main>
    </Container>
  )
}

export default Home
