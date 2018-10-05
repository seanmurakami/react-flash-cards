import React, { Fragment } from 'react'
import CreateCard from './new-card'
import Navbar from './navbar'
import Homepage from './home'
import hash from './hash'
import EditCard from './edit-card'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const { path, params } = hash.parse(location.hash)
    const getData = localStorage.getItem('flashcard-state')
    const appState = JSON.parse(getData) || {}
    this.state = {
      flashcards: appState.flashcards || [],
      view: { path, params },
      currentCard: null
    }
    this.addCard = this.addCard.bind(this)
    this.updateCards = this.updateCards.bind(this)
  }
  renderApp() {
    const { flashcards, view } = this.state
    if (view.path === 'cards' || !view.path) {
      return (<Homepage findcard={ this.state.count } flashCount={ flashcards.length } flashcards={ flashcards }/>)
    }
    if (view.path === 'new') {
      return (<CreateCard addCard={ this.addCard }/>)
    }
    return (<EditCard currentCard={ this.state.currentCard } updateCards={ this.updateCards }/>)
  }
  addCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    newFlashcard.push(flashcard)
    this.setState({flashcards: newFlashcard})
    location.hash = 'cards'
  }
  updateCards(flashcard) {
    const { params } = hash.parse(location.hash)
    const newFlashcard = [...this.state.flashcards]
    newFlashcard[Object.values(params)[0]] = flashcard
    this.setState({flashcards: newFlashcard})
    location.hash = 'cards'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      const newFlashcard = [...this.state.flashcards]
      const selectedCard = newFlashcard[Object.values(params)[0]]
      this.setState({
        view: { path, params },
        currentCard: selectedCard
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
