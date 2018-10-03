import React from 'react'
import CreateCard from './create-card'

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
      <CreateCard addCard={ this.addCard }/>
    )
  }
}
