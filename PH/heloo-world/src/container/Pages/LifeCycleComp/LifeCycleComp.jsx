import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css"
import { connect } from "react-redux"
import { GlobalConsumer } from "../../../context/context";
// import { RootContext } from "../../Home/Home"
class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log("constructor");
    }

    static getDriverStateFromprops(props, state) {
        console.log("getDriverStateFromprops");
    }

    componentDidMount() {
        console.log("componentDidmount");
        /* setTimeout(() => {
            this.setState ({
                count: 2
            })
        }, 5000); */
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentupdate");
        // console.log("nextProps", nextProps);
        console.log("nextState", nextProps);
        console.log("this state", this.state);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log("getSnapShotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, PrevState, snapShot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentDidmount");
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        // console.log('render');
        return (
            <Fragment>
                <p>Halaman LifeCycleComp</p>
                <hr />
                <button className="btn"
                    onClick={this.changeCount}>
                    Component Button {this.state.count}
                </button>
                <hr />
                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
            //  <RootContext.Consumer>
            //     {
            //         value => {
            //             return (
            //             )
            //         }
            //     }

            // </RootContext.Consumer>
        )
    }
}

/* const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
} */

/* export default connect(mapStateToProps)(LifeCycleComp); */
export default GlobalConsumer(LifeCycleComp)