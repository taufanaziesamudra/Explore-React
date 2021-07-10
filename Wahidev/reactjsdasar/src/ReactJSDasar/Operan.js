import React, { Component } from 'react'

export class Operan extends Component {
    render() {
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>Operan State myang menjadio props: {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti</button>
            </div>
        )
    }
}

export default Operan
