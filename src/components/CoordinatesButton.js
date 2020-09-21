import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
mouseCoor (e){
  let X = e.clientX;
  let Y = e.clientY;
return [X,Y]
}
render() {
    return (
    <div >
    <button onClick= {onReceiveCoordinates(this.mouseCoor)}>Clikc here</button>
    </div>
    )
}
}
