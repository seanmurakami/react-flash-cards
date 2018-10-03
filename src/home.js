import React from 'react'
import RenderCard from './user-cards'

export default function Homepage(props) {
  if (props.flashCount === 0) {
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="my-5">You have no flash cards</h2>
          <button onClick={ props.onClick } type="submit" className="btn btn-primary">Make One</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <div className="row">
          <RenderCard addCard={props.flashcards} />
        </div>
      </div>
    )
  }
}
