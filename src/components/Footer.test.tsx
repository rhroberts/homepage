import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2022/)).toBeInTheDocument()
    expect(screen.getByText(/Rusty Roberts/)).toBeInTheDocument()
  })

  it('renders site source link', () => {
    render(<Footer />)
    const sourceLink = screen.getByRole('link', { name: 'Site source' })
    expect(sourceLink).toBeInTheDocument()
    expect(sourceLink).toHaveAttribute('href', 'https://github.com/rhroberts/homepage')
    expect(sourceLink).toHaveAttribute('target', '_blank')
    expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders bullet separators', () => {
    render(<Footer />)
    expect(document.body.textContent).toContain('•')
  })
})