import React from 'react';

function Buttons(props){
    return(
        <div className="button-sec">
            <button onClick={props.handleClick}>Generate</button>
            <button>
            <a class="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${props.text}`}
                data-size="large">
                Tweet</a>
            </button>
        </div>
    )
}

export default Buttons