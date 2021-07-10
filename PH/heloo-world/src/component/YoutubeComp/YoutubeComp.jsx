import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
// Untuk memberikan nilai default pada props
YoutubeComp.defaultProps = {
    time: "00:00",
    title: "Title Here",
    desc: "Default"
}
export default YoutubeComp;