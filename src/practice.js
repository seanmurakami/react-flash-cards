import React from 'react'

const styles = {
  width: {
    width: '48rem'
  }
}

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      showAnswer: false
    }
    this.showAnswer = this.showAnswer.bind(this)
  }
  showAnswer() {
    this.setState({showAnswer: !this.state.showAnswer})
  }
  render() {
    if (this.props.flashcards.length > 0) {
      const answer = this.state.showAnswer ? '' : 'd-none'
      const buttonDesc = this.state.showAnswer ? 'Hide Answer' : 'Show Answer'
      return (
        <div className="mx-auto mt-5 card" style={ styles.width }>
          <div className="card-body">
            <h3 className="mb-0 card-title">{this.props.flashcards[0].question}</h3>
            <a onClick={this.showAnswer} href="#practice" className="my-3 btn btn-primary btn-sm">{ buttonDesc }</a>
            <p className={`card-text ${answer}`}>{this.props.flashcards[0].answer}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <div className="text-center">
            <h2 className="my-5">You have no flashcards to practice</h2>
            <a href="#new" className="font-weight-light btn btn-primary btn-lg" >Make One</a>
          </div>
        </div>
      )
    }
  }
}
