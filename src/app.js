import React, { Fragment } from 'react'
import CreateCard from './card'
import Navbar from './navbar'
import Homepage from './home'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      view: {
        path: 'cards'
      }
    }
    this.addCard = this.addCard.bind(this)
    this.renderApp = this.renderApp.bind(this)
  }
  renderApp() {
    if (this.state.view.path === 'cards') {
      return (<Homepage flashCount={ this.state.flashcards.length }/>)
    }
    else {
      return (<CreateCard addCard={ this.addCard }/>)
    }
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
        { this.renderApp() }
      </Fragment>
    )
  }
}
