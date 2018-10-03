import React, { Fragment } from 'react'
import CreateCard from './new-card'
import Navbar from './navbar'
import Homepage from './home'
import hash from './hash'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    const getData = localStorage.getItem('flashcard-state')
    const appState = JSON.parse(getData) || {}
    this.state = {
      flashcards: appState.flashcards || [],
      view: { path }
    }
    this.addCard = this.addCard.bind(this)
  }
  renderApp() {
    const { flashcards, view } = this.state
    if (view.path === 'cards' || !view.path) {
      return (<Homepage flashCount={ flashcards.length } flashcards={ flashcards }/>)
    }
    else {
      return (<CreateCard addCard={ this.addCard }/>)
    }
  }
  addCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    newFlashcard.push(flashcard)
    this.setState({flashcards: newFlashcard})
    location.hash = 'cards'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { flashcards } = this.state
      const JSONstate = JSON.stringify({flashcards})
      localStorage.setItem('flashcard-state', JSONstate)
    })
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
