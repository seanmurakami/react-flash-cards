import React from 'react'
import RenderCard from './user-cards'

const styles = {
  font: {
    fontSize: '1.5rem'
  }
}
export default function Homepage(props) {
  if (props.flashCount === 0) {
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="my-5">You have no flash cards</h2>
          <a href="#new" className="font-weight-light btn btn-primary" style={ styles.font }>Make One</a>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="mx-4">
        <div className="row">
          <RenderCard addCard={props.flashcards} />
        </div>
      </div>
    )
  }
}
