import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
buttonClicked = (e)=> {
  let X = ${e.screenX}, ${e.screenY};
  let Y = ${e.clientX}, ${e.clientY};
  let array = [X, Y]
  return array;
  }
render() {
    return (
    <div >
    <button onClick= {this.buttonClicked}>Clikc here</button>
    </div>
    )
}
}
