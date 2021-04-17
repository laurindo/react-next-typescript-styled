import React from 'react'
import Head from 'next/head'

import TwitterLogo from '../assets/ui.png'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <img src={TwitterLogo} alt="Logo Test" />
        <h1>Welcome to Next.JS</h1>
        <p>React + Typescript + NextJs + Eslint + Styled Components</p>
      </main>
    </Container>
  )
}

export default Home
