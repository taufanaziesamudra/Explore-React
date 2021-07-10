import React, { Component } from 'react'

export class subLifeCycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }
    render() {
        return (
            <div>
                <h2>Component Sub LifeCycle</h2>
            </div>
        )
    }
}

export default subLifeCycle
