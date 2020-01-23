import React from "react";

/*
Puede hacer spread operator desde los props ejemplo:
<Ejemplo name='Ignacio' age='24' {...object}/>
 */

const Cat = (props) => {
  return (
  	<div>
	  <h1>Cat 🐈</h1>
	  <pre>
		{JSON.stringify(props, null, 4)}
	  </pre>
	</div>
  );
};


export default Cat
