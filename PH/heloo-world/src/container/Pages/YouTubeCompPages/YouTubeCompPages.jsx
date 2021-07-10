import React, { Component, Fragment } from 'react'
import YouTubeComp from "../../../component/YoutubeComp/YoutubeComp"
import { connect } from 'react-redux'
class YouTubeCompPages extends Component {
    render() {
        return (
            <Fragment>
                <p>Yotube Componet</p>
                <hr />

                <YouTubeComp
                    time="11:00"
                    title="Belajar Ngoding"
                    desc="Ilmu React" />
                <YouTubeComp
                    time="11:30"
                    title="Belajar React JS - Bagian 2"
                    desc="Ilmu JavaScript" />
                <YouTubeComp
                    time="34:00"
                    title="Belajar ga jelas - Bagian 3"
                    desc="PHP" />
                <YouTubeComp
                    time="00:12"
                    title="Belajar bersama - Bagian 4"
                    desc="Python" />
                <YouTubeComp />
                <hr />
                <p>Total Order: {0}</p>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}
/* export default connect(mapStateToProps)(YouTubeCompPages) */
export default YouTubeCompPages