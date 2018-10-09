import React from 'react'

const styles = {
  dimensions: {
    width: '27rem'
  },
  editPosition: {
    right: '3rem',
    bottom: '1rem'
  },
  trashPosition: {
    right: '1rem',
    bottom: '1rem'
  },
  scroll: {
    height: '9em',
    overflow: 'auto',
    whiteSpace: 'pre-wrap'
  }
}

export default function RenderCard(props) {
  const renderCards =
      props.showCards.map((flashcard, index) => {
        return (
          <div
            key={ index }
            className="card shadow-sm mx-3 mb-4"
            style={ styles.dimensions }>
            <div className="card-body mb-4">
              <h6 className="font-weight-bold card-title">{flashcard.question}</h6><hr></hr>
              <p className="font-weight-light card-text" style={ styles.scroll }>{flashcard.answer}.</p>
            </div>
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
        )
      })
  return renderCards
}
