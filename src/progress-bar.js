import React from 'react'

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="progress w-75">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={ this.props.percentage }>
          </div>
        </div>
      </div>
    )
  }
}
