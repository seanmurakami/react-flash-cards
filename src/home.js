import React from 'react'

export default function Homepage(props) {
  if (props.flashCount === 0) {
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="my-5">You have no flash cards</h2>
          <button type="submit" className="btn btn-primary">Make One</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <h1>Hello</h1>
    )
  }
}
