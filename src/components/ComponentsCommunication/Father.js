import React, {Component} from 'react'
import Children from "./Children";

class Father extends Component {

  state = {
    greet: ''
  };

  handler = (greet) => {
    this.setState({ greet })
  };

  render() {
    return(
    	<div className='box red'>
		  <Children onGreet={this.handler}/>
		  <h1>{ this.state.greet }</h1>
		</div>
	);
  }

}

export default Father;
