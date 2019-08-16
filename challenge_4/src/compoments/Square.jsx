import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            occupied: false,
            x: props.x,
            y: props.y,
            color: '#f88379',
        }
    }

    changeColor(){
        console.log(this.props.target)
        if(this.props.target[0] === this.state.x && this.props.target[1] === this.state.y){
            console.log(Find);
        }
    }

    render(){
        return(
            <div className="square" style={{backgroundColor: `${this.state.color}`}}></div>
        )
    }
}

export default Square