import React from 'react'
import './textarea.scss'

const TextAre =  ({...rest}) => {
    return (
        <div>
            <textarea className="text-area" {...rest} />
        </div>
    )
}

export default TextAre
