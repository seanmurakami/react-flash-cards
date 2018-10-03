import React from 'react'

const styles = {
  width: {
    width: '20rem'
  }
}

export default function RenderCard(props) {
  const updateCard = props.addCard.map((flashcard, index) => {
    return (
      <div key={ index } id={ index } className="card m-2" style={ styles.width }>
        <div className="card-body">
          <h5 className="card-title">{flashcard.question}</h5>
          <p className="card-text">{flashcard.answer}.</p>
        </div>
      </div>
    )
  })
  return updateCard
}
