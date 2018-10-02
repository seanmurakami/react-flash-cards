import React from 'react'
import CreateCard from './create-card'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    document.querySelector('#createFlash').addEventListener('submit', (e) => {
      e.preventDefault()
      const flashcard = {
        question: document.querySelector('[type=question]').value,
        answer: document.querySelector('[type=answer]').value
      }
      const { question, answer } = flashcard
      if (!question || !answer) {
        alert('Please enter content in both fields')
      }
      else {
        const flashCards = JSON.parse(localStorage.getItem('flashCards')) || []
        flashCards.push(flashcard)
        localStorage.setItem('flashCards', JSON.stringify(flashCards))
        e.target.reset()
      }
    })
  }
  render() {
    return (
      <CreateCard />
    )
  }
}
