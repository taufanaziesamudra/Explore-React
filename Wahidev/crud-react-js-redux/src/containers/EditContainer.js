import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
export class EditContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit users</h1>
      </Container>
    )
  }
}

export default EditContainer
