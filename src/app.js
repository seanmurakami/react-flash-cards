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
    this.editCard = this.editCard.bind(this)
    this.findCard = this.findCard.bind(this)
  }
  renderApp() {
    const { flashcards, view, currentCard } = this.state
    if (view.path === 'cards' || !view.path) {
      return (<Homepage lookup={ this.findCard } flashCount={ flashcards.length } flashcards={ flashcards }/>)
    }
    if (view.path === 'new') {
      return (<CreateCard addCard={ this.addCard }/>)
    }
    return (<EditCard question={ flashcards[currentCard].question } answer={ flashcards[currentCard].answer } editCard= { this.editCard }/>)
  }
  addCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    newFlashcard.push(flashcard)
    this.setState({flashcards: newFlashcard})
    location.hash = 'cards'
  }
  editCard(flashcard) {
    const newFlashcard = [...this.state.flashcards]
    newFlashcard.map((item, i) => {
      if (i === parseInt(flashcard.id, 10)) {
        item.question = flashcard.question
        item.answer = flashcard.answer
        return item
      }
    })
    this.setState({flashcards: newFlashcard})
    location.hash = 'cards'
  }
  findCard(index) {
    this.setState({currentCard: index})
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
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
