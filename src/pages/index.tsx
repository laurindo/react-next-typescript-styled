import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import { useGetPosts } from '../useRequest'
import Post from '../components/Post'

const Home: React.FC = () => {
  const { posts, error } = useGetPosts('/posts')
  if (error) return <h1>Something wnt wrong!</h1>
  if (!posts) return <p>loading...</p>
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Welcome to Next.JS</h1>
        <p>React + Typescript + NextJs + Eslint + Styled Components</p>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </Container>
  )
}

export default Home
