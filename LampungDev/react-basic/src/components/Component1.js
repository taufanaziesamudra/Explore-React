import React, { Component } from 'react'
import Component3 from './Component3'

class Component1 extends Component { // StateFull Component atau Class Component
    render () {
        return (
            <div>
                <h1>Ini StateFull Component</h1>
                <Component3 />
            </div>
        )
    }
}

export default Component1