import React from 'react';
import Square from './Square.jsx';

const Row = (props) =>{  

    return(
        <td>{props.numberArr.map((ele, i) =>
            <Square x={props.x} y={ele} key={i} target={props.target}/>
        )}
        </td>

    )
}
export default Row