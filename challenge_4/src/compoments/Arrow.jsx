import React from 'react';

const Arrow = (props) => {

    return(
        <div>
            <h2 onClick={() => props.drop(props.x)}>Arrow</h2>
        </div>
    )
}

export default Arrow