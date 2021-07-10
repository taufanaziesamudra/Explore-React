// Library
import React, { Component, createContext, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import BlogPost from "../Pages/BlogPost/BlogPost";
import Product from "../Pages/Product/Product";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import YouTubeCompPages from "../Pages/YouTubeCompPages/YouTubeCompPages";
import DetailPost from "../Pages/DetailPost/DetailPost";
import Hooks from "../Pages/Hooks/Hooks";

// Style
import "./Home.css";
import GlobalProvider from "../../context/context";

class Home extends Component {
    /*  state = {
         totalOrder: 5
     }
 
     dispatch = (action) => {
         if (action.type === "PLUS_ORDER") {
             return this.setState({
                 totalOrder: this.state.totalOrder + 1
             })
         }
 
         if (action.type === "MINUS_ORDER") {
             return this.setState({
                 totalOrder: this.state.totalOrder - 1
             })
         }
     } */

    /*   state = {
          showComponent: true
      } */

    /* componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            })
        }, 15000);
    } */

    render() {
        return (
            <Router>
                {/* <div>
                    <p>Counter</p>
                    <hr />
                    <Product />

                    <p>LifeCycleComp</p>
                    <hr />
                    {
                        this.state.showComponent

                            ?
                            <LifeCycleComp />
                            :
                            null
                    }

                    <p>BlogPost</p>
                    <hr />
                    <BlogPost />
                </div> */}

                {/* <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycleComp</Link>
                        <Link to="youtubecomp">YouTubeComp</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/detail-post/:postID" component={DetailPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                    <Route path="/youtubecomp" component={YouTubeCompPages}></Route>
                    <Route path="/hooks" component={Hooks}></Route>
                </Fragment>
                {/*  </Provider> */}
            </Router>
        )
    }
}
export default GlobalProvider(Home)