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

export default class RenderCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      this.props.showCards.map((flashcard, index) => {
        return (
          <div key={ index } className="card m-2" style={ styles.width }>
            <div className="card-body">
              <h5 className="card-title">{flashcard.question}</h5>
              <p className="card-text">{flashcard.answer}.</p>
              <a className="position-absolute" href={`#edit?card=${index}`} style={ styles.position }><i className="far fa-edit fa-lg"></i></a>
            </div>
          </div>
        )
      }
      ))
  }
}
