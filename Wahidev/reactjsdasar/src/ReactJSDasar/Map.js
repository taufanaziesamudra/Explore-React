import React from 'react'

const makanan = [
    {
        nama: "Soto",
        harga: 12000,
    },
    {
        nama: "Mie Ayam",
        harga: 7000,
    },
    {
        nama: "Daging Ayama",
        harga: 5000,
    },
    {
        nama: "Nasi Goreng",
        harga: 20000
    }

]

const total_bayar = makanan.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map(makanan =>(
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}        
            </ul>

            <h2>Map Filter yang lebih dari 10000</h2>
            <ul>
                {makanan.filter((makanan) => makanan.harga > 10000).map(makanan =>(
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}        
            </ul>

            <h2>Reduce</h2>
            <h3>Total Bill : {total_bayar}</h3>
        </div>
    )
}

export default Map
