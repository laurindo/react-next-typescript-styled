import React from 'react'
import { screen, render } from '@testing-library/react'
import Post from '../components/Post'

describe('Post', () => {
  it('renders the title post', () => {
    const postData = { id: 1, title: 'Learning about unit test', body: 'Hello' }
    render(<Post post={postData} />)
    expect(screen.getByText(/Learning about unit test/i)).toBeTruthy()
  })
})
