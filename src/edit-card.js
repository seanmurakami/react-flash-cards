import React from 'react'

const styles = {
  background: {
    width: '40rem'
  }
}

export default class EditCard extends React.Component {
  constructor(props) {
    super(props)
    this.editCard = this.editCard.bind(this)
  }
  editCard(e) {
    e.preventDefault()
    const editedCard = new FormData(e.target)
    const card = {
      question: editedCard.get('question'),
      answer: editedCard.get('answer'),
      id: this.props.currentCard.id
    }
    this.props.updateCards(card)
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form
          onSubmit={ this.editCard }
          className="bg-light rounded mt-5 p-4"
          style={styles.background}>
          <h2 className="d-flex justify-content-center">Edit Your Flashcard</h2>
          <div className="form-group">
            <label>Question</label>
            <input
              name="question"
              className="form-control"
              defaultValue={this.props.currentCard.question}
            />
          </div>
          <div className="form-group">
            <label>Answer</label>
            <textarea
              name="answer"
              rows="4"
              className="form-control"
              defaultValue={this.props.currentCard.answer}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
