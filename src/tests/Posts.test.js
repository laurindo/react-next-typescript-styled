import React from 'react'
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react'
import Posts from '../components/Posts'
import mockedAxios from 'axios'
import fakePosts from './__mocks__/fake-posts.json'

describe('Posts', () => {
  describe('when the fetching operation is pending', () => {
    it('will show loading message', () => {
      const { getByText } = render(<Posts />)
      expect(getByText(/loading/i)).toBeTruthy()
      cleanup()
    })
  })

  describe('when fetch operation is done', () => {
    it('show a list of posts', async () => {
      const { getByTestId } = render(<Posts />)
      const listNode = await waitFor(() => getByTestId('list'))
      expect(listNode).toBeTruthy()
    })
  })

  describe('when clicking on filter button', () => {
    it('show only the first 10 results', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: fakePosts })
      const { getByText, getByTestId } = render(<Posts />)
      const btnFilter = await waitFor(() => getByText(/filter/i))
      fireEvent.click(btnFilter)

      expect(btnFilter).toBeTruthy()
      expect(getByTestId('list').children.length).toEqual(12)
    })
  })
})
