import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form className="bg-light border border-dark rounded mt-5 p-4" style={{width: "35rem"}}>
          <h2 className="d-flex justify-content-center">Create a Flash Card</h2>
          <div className="form-group">
            <label>Question</label>
            <input type="question" className="form-control" placeholder="Enter question"></input>
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input type="question" className="form-control" placeholder="Enter answer"></input>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
