import React from 'react';

function Buttons(props){
    const txt = `${props.text}  Author- ${props.authorName}`
    return(
        <div className="btn-sec">
            <button className="gen-btn" onClick={props.handleClick}>New Quote</button>
            <a className="twitter-link"
                    href={`https://twitter.com/intent/tweet?text=${txt}`}
                    data-size="large" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" aria-hidden="true">Tweet</i>
            </a>
        </div>
    )
}

export default Buttons