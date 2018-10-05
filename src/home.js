import React from 'react'
import RenderCard from './render-cards'

export default function Homepage(props) {
  if (props.flashCount === 0) {
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="my-5">You have no flash cards</h2>
          <a href="#new" className="font-weight-light btn btn-primary btn-lg" >Make One</a>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="mx-4">
        <div className="row">
          <RenderCard showCards={ props.flashcards } />
        </div>
      </div>
    )
  }
}
