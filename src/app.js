import React, { Fragment } from 'react'
import CreateCard from './create-card'
import Navbar from './navbar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
    this.addCard = this.addCard.bind(this)
  }
  addCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    newFlashcard.push(flashcard)
    this.setState({flashcards: newFlashcard})
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <CreateCard addCard={ this.addCard }/>
      </Fragment>
    )
  }
}
