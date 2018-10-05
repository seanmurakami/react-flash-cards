import React from 'react'

const styles = {
  background: {
    width: '40rem'
  }
}

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleSave(e) {
    e.preventDefault()
    const { question, answer } = this.state
    if (!question || !answer) {
      alert('Please enter content in both fields')
    }
    else {
      this.props.addCard(this.state)
    }
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form
          onSubmit={ this.handleSave }
          className="bg-light rounded mt-5 p-4"
          style={styles.background}>
          <h2 className="d-flex justify-content-center">Create a Flash Card</h2>
          <div className="form-group">
            <label>Question</label>
            <input
              onChange={ this.handleChange }
              name="question"
              className="form-control"
              placeholder="Enter question"
            />
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input
              onChange={ this.handleChange }
              name="answer"
              className="form-control"
              placeholder="Enter answer"
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
