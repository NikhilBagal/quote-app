import React from 'react'

function Quote(props){
    return(
        <div className="quote-txt">
            <h1>{props.text}</h1>
            <p>{props.authorName}</p>
        </div>
    )
}

export default Quote