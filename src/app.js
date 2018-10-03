import React, { Fragment } from 'react'
import CreateCard from './card'
import Navbar from './navbar'
import Homepage from './home'
import hash from './hash'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      view: { path: '' }
    }
    this.addCard = this.addCard.bind(this)
  }
  renderApp() {
    const { flashcards, view } = this.state
    if (this.state.view.path === 'cards' || !view.path) {
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
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
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
