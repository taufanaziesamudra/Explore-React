import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import "./Product.css";
import { connect } from 'react-redux'
import { GlobalConsumer } from '../../../context/context';
// import { RootContext } from "../../Home/Home"
class Product extends Component {
    /* state = {
        order: 4,
        name: "Taufan Ajie Samudro"
    } */

    /*  // Membuat props dengan Method yang akan merubah seluruh nilai dari value
     onCounterChange = (newValue) => {
         this.setState({
             order: newValue
         })
     } */

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div> {/* dari line 7 yang menyatakan state tersebut */}
                    </div>
                </div>
                {/* Membuat props dengan nama onCounterChange yang akan dikirim ke child */}
                {/* <CardProduct onCounterChange={(value) => this.onCounterChange(value)} /> */}
                <CardProduct />
                {/* Value akan dikrimkan ke value dari onCounterCrhange yang mengupdate nilai */}
            </Fragment>
            //  <RootContext.Consumer>
            //     {
            //         value => {
            //             return (
            //             )
            //         }
            //     }
            // </RootContext.Consumer >

        )
    }
}

/* const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
} */
/* export default connect(mapStateToProps)(Product);*/
export default GlobalConsumer(Product)