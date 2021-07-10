import React, { Component } from "react"
import { connect } from 'react-redux'
import { GlobalConsumer } from "../../../../context/context";
import ActionType from "../../../../redux/reducer/globalActioanType";
// import { RootContext } from "../../../Home/Home"
class Counter extends Component {
    /* state = {
        order: 4,
        name: "Taufan Ajie Samudro"
    } */

    /* handleCounterChange = (newValue) => {
        // Memanggil props yang sudah dibuat di Product, newValue yang dikirimkan akan ditangkap di Product Value
        this.props.onCounterChange(newValue)
    } */

    /* // Method untuk merubah handlePlus
    handleplus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    } */

    /* // Method untuk merubah handleMinus
    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    } */
    render() {
        return (
            <div className="counter">
                <button className='minus' onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>+</button>
            </div>
            /*  <RootContext.Consumer>
                 {
                     value => {
                         console.log("value", value)
                         return (
                         )
                     }
                 }
             </RootContext.Consumer> */
        )
    }


}

/* const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleplus: () => dispatch({ type: ActionType.PLUS_ORDER }),
        handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
    }
} */
/* export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
export default GlobalConsumer(Counter)