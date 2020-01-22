import React from 'react'
import ReactDOM from 'react-dom'

// class component
class TargetFruitClass extends React.Component {

  constructor(props, context) {
	super(props, context);

	const METHODS = [
		'addQuantity',
		'removeQuantity'
	];

	// se les hace bind a todos los metodos
	METHODS.forEach((method) => {
	  this[method] = this[method].bind(this)
	});

	this.state = {
	  quantity: 0
	}
  }

  addQuantity() {
	this.setState({
	  quantity: this.state.quantity + 1
	})
  }

  removeQuantity() {
	this.setState({
	  quantity: this.state.quantity - 1
	})
  }

  render() {
	return (
		<div>
		  <h3>{this.props.name}</h3>
		  <div>Cantidad: { this.state.quantity }</div>
		  <button onClick={ this.addQuantity }> + </button>
		  <button onClick={ this.removeQuantity }> - </button>
		  <hr/>
		  <p> $ {this.props.price} </p>
		</div>
	)
  }
}

// funtional component
const TargetFruit = (props) => {
  return (
	  <div>
		<h3>{props.name}</h3>
		<hr/>
		<p> $ {props.price} </p>
	  </div>
  )
};

const App = () => (
	<div>
	  <TargetFruit name='Naranja' price={2.0}/>
	  <TargetFruit name='Sandia' price={3.5}/>
	  <TargetFruit name='Melon' price={4.7}/>
	  <TargetFruitClass name='Uva' price={1.0}/>
	</div>
);

ReactDOM.render(<App/>, document.getElementById('root'));

