import React from 'react'

const styles = {
  width: {
    width: '28rem'
  },
  editPosition: {
    right: '3rem',
    bottom: '1rem'
  },
  trashPosition: {
    right: '1rem',
    bottom: '1rem'
  }
}

export default function RenderCard(props) {
  const renderCards =
      props.showCards.map((flashcard, index) => {
        return (
          <div
            key={ index }
            className="card m-2"
            style={ styles.width }>
            <div className="card-body">
              <h5 className="card-title">{flashcard.question}</h5>
              <p className="card-text">{flashcard.answer}.</p>
              <a
                className="position-absolute"
                href={`#edit?card=${flashcard.id}`}
                style={ styles.editPosition }>
                <i className="far fa-edit fa-lg"></i>
              </a>
              <a
                onClick={ props.removeCard }
                className="position-absolute"
                href={`#cards`}
                style={ styles.trashPosition }>
                <i id={ flashcard.id } className="fas fa-trash-alt fa-lg"></i>
              </a>
            </div>
          </div>
        )
      })
  return renderCards
}
