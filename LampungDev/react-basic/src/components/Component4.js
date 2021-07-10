import React, { Component } from 'react'

export default class Component4 extends Component {
    state = {
        nama: "Dajjal",
        semester: 2,
        hobi: "Pacaran"
    }
    render() {
        return (
            <div>
                <h3>Nama: {this.state.nama}</h3>
                <p>Semester: {this.state.semester}</p>
                <div>{this.state.hobi}</div>
                <p>===============================</p>
            </div>
        )
    }
}
