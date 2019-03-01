import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class componentName extends Component {
    render() {
        return (
            <Row className='show-grid'>
                <Col md={6}>Est. taxes and fees (Based on 77026)</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        )
    }
}
