import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = 'https://jsonplaceholder.typicode.com'

export const useGetPosts = path => {
  if (!path) {
    throw new Error('Path is required')
  }

  const url = baseUrl + path
  const { data: posts, error } = useSwr(url, fetcher)
  return { posts, error }
}
