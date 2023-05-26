import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Imaginaition Read',
  description: 'Render markdown text into an easily readable animation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
