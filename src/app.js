import React from 'react'
import CreateCard from './create-card'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <CreateCard />
    )
  }
}
