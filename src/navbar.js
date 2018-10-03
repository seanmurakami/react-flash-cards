import React from 'react'

const styles = {
  font: {
    fontSize: '1.5rem'
  }
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" style={ styles.font }>
          <a className="nav-item nav-link active" href="#cards">Cards <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#new">New</a>
        </div>
      </div>
    </nav>
  )
}
