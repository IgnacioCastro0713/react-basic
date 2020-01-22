import React from "react";
import './TargetaFruta.css'

class TargetFruitClass extends React.Component {

  state = {
	quantity: 0
  };

  addQuantity = () => {
	this.setState({
	  quantity: this.state.quantity + 1
	})
  };

  removeQuantity = () => {
	this.setState({
	  quantity: this.state.quantity - 1
	})
  };

  render() {
	const hasItems = this.state.quantity > 0;

	return (
		<div className={`target-fruit ${hasItems ? 'target-fruit-active' : ''}`}>
		  <h3>{this.props.name}</h3>
		  <div>Cantidad: {this.state.quantity}</div>
		  <button onClick={this.addQuantity}> +</button>
		  <button onClick={this.removeQuantity}> -</button>
		  <hr/>
		  <p> $ {this.props.price} </p>
		  <p>Total: {this.state.quantity * this.props.price}</p>
		</div>
	)
  }
}

export default TargetFruitClass;
