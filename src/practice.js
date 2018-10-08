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
    this.changeCard = this.changeCard.bind(this)
  }
  showAnswer() {
    this.setState({showAnswer: !this.state.showAnswer})
  }
  changeCard(e) {
    const target = e.target.id
    const { currentCard } = this.state
    if (this.props.flashcards.length - 1 > currentCard) {
      if (target === 'previous' && this.state.currentCard > 0) {
        this.setState({
          currentCard: currentCard - 1,
          showAnswer: false
        })
      }
      else if (target === 'next') {
        this.setState({
          currentCard: currentCard + 1,
          showAnswer: false
        })
      }
    }
    else if (this.props.flashcards.length - 1 === currentCard) {
      if (target === 'previous') {
        this.setState({
          currentCard: currentCard - 1,
          showAnswer: false
        })
      }
      else {
        this.setState({currentCard: 0, showAnswer: false})
      }
    }
  }
  render() {
    const { currentCard, showAnswer } = this.state
    const { flashcards } = this.props
    const answer = showAnswer ? '' : 'd-none'
    const buttonDesc = showAnswer ? 'Hide Answer' : 'Show Answer'
    if (flashcards.length > 0) {
      return (
        <div className="mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <i onClick={ this.changeCard } id="previous" className="mr-2 fas fa-less-than fa-lg"></i>
            <div className="card" style={ styles.width }>
              <div className="card-body">
                <h3 className="mb-0 card-title">{flashcards[currentCard].question}</h3>
                <a onClick={this.showAnswer} href="#practice" className="my-3 btn btn-primary btn-sm">{ buttonDesc }</a>
                <p className={`card-text ${answer}`}>{flashcards[currentCard].answer}</p>
              </div>
            </div>
            <i onClick={ this.changeCard } id="next" className="ml-2 fas fa-greater-than fa-lg"></i>
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
