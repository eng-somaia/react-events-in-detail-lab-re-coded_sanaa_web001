import React, { Component } from 'react';

export default class DelayedButton extends Component {
buttonDClicked = (e)=> {
setTimeout(this.props.onDelayedClick, this.props.delay);
  }
render() {
    return (
    <div >
    <button onClick= {this.buttonDClicked}>Clikc here</button>
    </div>
    )
}
}
