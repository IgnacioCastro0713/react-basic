import React, {Component} from 'react';
import './global.css';

class Children extends Component {

  greet = () => {
    this.props.onGreet('Course of React!')
  };

  render() {
	return (
		<div className='box blue'>
		  <h2>Children</h2>
		  <button onClick={this.greet}>Handler</button>
		</div>
	);
  }
}

export default Children;
