import React, { useState, useEffect } from 'react'
import AxiosService from '../services/AxiosService'

const Posts: React.FC = () => {
  const axiosService = new AxiosService()
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    let mounted = true
    async function getPosts() {
      const response = await axiosService.getExternalAPI('posts')
      if (mounted) {
        setPosts(response.data)
      }
    }

    getPosts()
    return () => {
      mounted = false
    }
  }, [])

  if (!posts) {
    return <span>loading...</span>
  }

  return (
    <>
      <button>filter</button>
      <ul data-testid="list">
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Posts
