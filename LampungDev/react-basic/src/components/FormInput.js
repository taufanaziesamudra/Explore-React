import React, { Component } from 'react'

export default class FormInput extends Component {
    state = {
        nama: "Komar",
        alamat: "Negara Api",
        hobi: "Berantem",
        mobil: "Bajaj",
        jenis_kelamin: "wanita"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault({
        })
    }

    /* handleChange = (e) => {
        this.setState({
            nama: e.target.value
        })
    } */

    /* handleAlamat = (e) => {
        this.setState({
        alamat: e.target.value
        })
    } */

    /* handleHobi = (e) => {
        this.setState({
            hobi: e.target.value
        })
    } */

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Nama : {this.state.nama}</h2>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/>
                </div>
                <div>
                    <h2>Alamat : {this.state.alamat}</h2>
                    <input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange}/>
                </div>
                <div>
                    <h2>Hobi : {this.state.hobi}</h2>
                    <input type="text" name="hobi" value={this.state.hobi} onChange={this.handleChange}/>
                </div>

                <div>
                    <h2>Mobil {this.state.mobil}</h2>
                        <select name="mobil" id="" value={this.state.mobil} onChange={this.handleChange}>
                        <option value="bajaj">Bajaj</option>
                        <option value="fortuner">Fortuner</option>
                        <option value="bmw">BMV</option>
                        <option value="alpard">Alpard</option></select>
                </div>

                <div>
                    <h2>Jenis Kelamin {this.state.jenis_kelamin}</h2>
                    <input type="radio" value="pria" name="jenis_kelamin" id="" onChange={this.handleChange} 
                        checked={this.state.jenis_kelamin === "pria" ? true : false}/>
                    <input type="radio" value="wanita" name="jenis_kelamin" id="" onChange={this.handleChange}
                        checked={this.state.jenis_kelamin === "wanita" ? true : false}/>

                </div>
                <br />
                <br />
                <button type="submit">Kirim Data</button>
            </form>
        )
    }
}
