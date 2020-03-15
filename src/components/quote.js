import React from 'react'

function Quote(props){
    return(
        <div className="quote-txt">
            <h1 className="head-txt">{props.text}</h1>
            <p className="auth-txt">Author: {props.authorName}</p>
        </div>
    )
}

export default Quote