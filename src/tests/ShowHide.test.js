import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ShowHide from '../components/ShowHide'

describe('Show', () => {
  it('message not visible', () => {
    render(<ShowHide />)
    expect(screen.getByText(/Not visible/i)).toBeTruthy()
  })

  it('message is visible', () => {
    render(<ShowHide />)
    fireEvent.click(screen.getByText(/show/i))
    expect(screen.getByText(/Is visible/i)).toBeTruthy()
  })
})
