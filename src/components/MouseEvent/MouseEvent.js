import React, {Component} from "react";

class MouseEvent extends Component{

  styles = {
    height: '200px',
	background: 'gold',
	padding: '1em',
	boxSizing: 'border-box'
  };

  state = {
    x: 0,
	y: 0
  };


  mouseDriver = (event) => {
    this.setState({
	  x: event.clientX,
	  y: event.clientY
	})
  };


  render() {
    return (
  	<div style={this.styles} onMouseMove={this.mouseDriver}>
	  <div> x: { this.state.x }</div>
	  <div> y: { this.state.y } </div>
	</div>
  );}
}

export default MouseEvent
