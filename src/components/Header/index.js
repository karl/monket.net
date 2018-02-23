import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      padding: '2em',
      background: '#FFA91A',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Karl O'Keeffe
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
