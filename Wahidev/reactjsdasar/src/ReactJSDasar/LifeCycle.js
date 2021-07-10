import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'
export class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             makananan: "Nasi Goreng",
             data: {},
             tampilHalaman: false,
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typcode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                data: json
            })
        })
    }

    ubahMakanan(value) {
        this.setState({
            makananan: value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.makananan}</h1>
                {this.state.tampilHalaman && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
                <button onClick={() => this.setState({tampilHalaman: !this.state.tampilHalaman})}>Ganti Halaman</button>
            </div>
        )
    }
}

export default LifeCycle
