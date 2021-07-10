import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { getUserDetail } from '../actions/userAction'
import BackComponent from '../components/BackComponent'
import DetailUserComponent from '../components/DetailUserComponent'

export class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id))
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>DetailUSer</h1>
        <DetailUserComponent />
      </Container>
    )
  }
}

export default connect()(DetailContainer)
