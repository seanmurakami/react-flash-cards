import React from 'react'

const styles = {
  width: {
    width: '20rem',
    height: '12rem'
  },
  position: {
    right: '1rem',
    bottom: '1rem'
  }
}

export default function RenderCard(props) {
  const updateCard = props.addCard.map((flashcard, index) => {
    return (
      <div key={ index } id={ index } className="card m-2" style={ styles.width }>
        <div className="card-body">
          <h5 className="card-title">{flashcard.question}</h5>
          <p className="card-text">{flashcard.answer}.</p>
          <a className="position-absolute" href="#cards" style={ styles.position }><i className="far fa-edit"></i></a>
        </div>
      </div>
    )
  })
  return updateCard
}
