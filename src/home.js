import React from 'react'

const styles = {
  position: {
    width: '25rem'
  }
}
export default function Homepage() {
  return (
    <div className="mx-auto text-center" style={ styles.position }>
      <h2 className="my-5">You have no flash cards</h2>
      <button type="submit" className="btn btn-primary">Make One</button>
    </div>
  )
}
