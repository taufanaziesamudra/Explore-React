import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'

export class CreateContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create user</h1>
      </Container>
    )
  }
}

export default CreateContainer
