import React from 'react'
import hash from './hash'

const styles = {
  background: {
    width: '40rem'
  }
}

export default class EditCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit(e) {
    e.preventDefault()
    const newValue = new FormData(e.target)
    const editValues = {
      question: newValue.get('question'),
      answer: newValue.get('answer'),
      id: hash.parse(location.hash).params.card
    }
    this.props.editCard(editValues)
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form
          onSubmit={this.handleEdit}
          className="bg-light rounded mt-5 p-4"
          style={styles.background}>
          <h2 className="d-flex justify-content-center">Edit Your Flash Card</h2>
          <div className="form-group">
            <label>Question</label>
            <input
              name="question"
              className="form-control"
              defaultValue={this.props.question}
            />
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input
              name="answer"
              className="form-control"
              defaultValue={this.props.answer}
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
