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
      currentCard: null,
      id: appState.id || 1
    }
    this.addCard = this.addCard.bind(this)
    this.updateCards = this.updateCards.bind(this)
    this.removeCard = this.removeCard.bind(this)
  }
  renderApp() {
    const { flashcards, view, currentCard } = this.state
    if (view.path === 'cards' || !view.path) {
      return (<Homepage removeCard= { this.removeCard } flashCount={ flashcards.length } flashcards={ flashcards }/>)
    }
    if (view.path === 'new') {
      return (<CreateCard addCard={ this.addCard }/>)
    }
    return (<EditCard currentCard={ currentCard } updateCards={ this.updateCards }/>)
  }
  addCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    flashcard.id = this.state.id
    newFlashcard.push(flashcard)
    this.setState({flashcards: newFlashcard, id: this.state.id + 1})
    location.hash = 'cards'
  }
  updateCards(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    const updatedCards = newFlashcard.map(item => {
      if (parseInt(item.id, 10) === parseInt(flashcard.id, 10)) {
        return flashcard
      }
      return item
    })
    this.setState({flashcards: updatedCards})
    location.hash = 'cards'
  }
  removeCard(e) {
    const flashID = parseInt(e.target.id, 10)
    const newFlashcard = [...this.state.flashcards]
    const updatedCards = newFlashcard.filter(flashcard => {
      return flashID !== flashcard.id
    })
    this.setState({flashcards: updatedCards})
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      const { flashcards } = this.state
      const currentCard = flashcards.find(flashcard =>
        parseInt(flashcard.id, 10) === parseInt(params.card, 10)
      )
      this.setState({
        view: { path, params },
        currentCard
      })
    })
    window.addEventListener('beforeunload', () => {
      const { flashcards, id } = this.state
      const JSONstate = JSON.stringify({flashcards, id})
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
