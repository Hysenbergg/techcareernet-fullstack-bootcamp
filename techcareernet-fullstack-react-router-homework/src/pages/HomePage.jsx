import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Link to='/products'>Product List</Link>
        <Link to='/addproduct'>Add Product</Link>
      </div>

      <h1> HomePage </h1>
    </div>
  )
}

export default HomePage