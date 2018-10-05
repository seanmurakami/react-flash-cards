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
    this.findIndex = this.findIndex.bind(this)
  }
  findIndex(e) {
    const selectedID = parseInt(e.target.id, 10)
    this.props.lookup(selectedID)
  }
  render() {
    return (
      this.props.addCard.map((flashcard, index) => {
        return (
          <div key={ index } className="card m-2" style={ styles.width }>
            <div className="card-body">
              <h5 className="card-title">{flashcard.question}</h5>
              <p className="card-text">{flashcard.answer}.</p>
              <a onClick={ this.findIndex } className="position-absolute" href={`#edit?card=${index}`} style={ styles.position }><i id={ index } className="far fa-edit fa-lg"></i></a>
            </div>
          </div>
        )
      }
      ))
  }
}
