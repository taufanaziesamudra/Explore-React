import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { postUserCreate } from '../actions/userAction'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'

export class CreateContainer extends Component {

  handleSubmit(data) {
    console.log(data)

  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create user</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default CreateContainer
