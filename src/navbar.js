import React from 'react'

const styles = {
  font: {
    fontSize: '1.5rem'
  }
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand mb-4">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" style={ styles.font }>
          <a className="nav-item nav-link" href="#cards">Cards</a>
          <a className="nav-item nav-link" href="#new">New</a>
          <a className="nav-item nav-link" href="#practice">Practice</a>
        </div>
      </div>
    </nav>
  )
}
