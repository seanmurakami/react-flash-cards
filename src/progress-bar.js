import React from 'react'

export default function ProgressBar(props) {
  const styles = {
    status: props.width
  }
  return (
    <div className="mb-3 d-flex justify-content-center">
      <div className="progress w-50">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={ styles.status }><span>{ styles.status.width }</span>
        </div>
      </div>
    </div>
  )
}
