import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/"}>
          <Button color="dark" classname="mr-2">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  )
}

export default BackComponent
