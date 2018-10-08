import React, { Fragment } from 'react'

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
      showAnswer: false,
      status: {
        width: '0%'
      }
    }
    this.showAnswer = this.showAnswer.bind(this)
    this.changeCard = this.changeCard.bind(this)
    this.calcNext = this.calcNext.bind(this)
    this.calcPrevious = this.calcPrevious.bind(this)
  }
  showAnswer() {
    this.setState({showAnswer: !this.state.showAnswer})
  }
  changeCard(e) {
    const target = e.target.id
    const { currentCard } = this.state
    if (this.props.flashcards.length - 1 > currentCard) {
      if (target === 'previous' && this.state.currentCard > 0) {
        this.setState(prevState => ({
          currentCard: prevState.currentCard - 1,
          showAnswer: false,
          status: this.calcPrevious(currentCard)
        }))
      }
      else if (target === 'next') {
        this.setState(prevState => ({
          currentCard: prevState.currentCard + 1,
          showAnswer: false,
          status: this.calcNext(currentCard)
        }))
      }
    }
    else if (this.props.flashcards.length - 1 === currentCard) {
      if (target === 'previous') {
        this.setState(prevState => ({
          currentCard: prevState.currentCard - 1,
          showAnswer: false,
          status: this.calcPrevious(currentCard)
        }))
      }
      else {
        this.setState({currentCard: 0, showAnswer: false, status: {width: '0%'}})
      }
    }
  }
  calcNext(flashcard) {
    const status = {
      width: Math.round((flashcard + 1) / (this.props.flashcards.length) * 100) + '%'
    }
    return status
  }
  calcPrevious(flashcard) {
    const status = {
      width: Math.round((flashcard - 1) / (this.props.flashcards.length) * 100) + '%'
    }
    return status
  }
  render() {
    const { currentCard, showAnswer, status } = this.state
    const { flashcards } = this.props
    const answer = showAnswer ? '' : 'd-none'
    const buttonDesc = showAnswer ? 'Hide Answer' : 'Show Answer'
    if (flashcards.length > 0) {
      return (
        <Fragment>
          <div className="mt-5 d-flex justify-content-center">
            <div className="progress w-50">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={ status }><span>{ status.width }</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
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
        </Fragment>
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
