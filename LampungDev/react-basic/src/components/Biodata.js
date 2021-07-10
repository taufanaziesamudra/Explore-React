import React, { Component } from "react"

class Biodata extends Component {
    render () {
        return (
            <div>
                <h3>Nama: {this.props.nama}</h3>
                <p>Semester: {this.props.semester}</p>
                <div>{this.props.hobi}</div>
                <p>===============================</p>
            </div>
        )
    }
}

export default Biodata