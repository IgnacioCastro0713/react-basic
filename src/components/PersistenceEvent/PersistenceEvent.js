import React, {Component} from 'react'

class PersistenceEvent extends Component {

  state = {
	color: 'blue'
  };

  changeHandler = (event) => {

    const color = event.target.value;

    this.setState(state => (
		{
		  color
		}
	))
  };

  render() {
	return (
		<div>
		  <input type="text" onChange={this.changeHandler}/>
		  <h1 style={{
              color: this.state.color
          }}>
			{this.state.color}
		  </h1>
		</div>
	);
  }

}


export default PersistenceEvent;
