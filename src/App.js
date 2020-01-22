import TargetFruitClass from "./components/TargetFruitClass";
import React from "react";

const App = () => (
	<div>
	  <TargetFruitClass name='Naranja' price={2.0}/>
	  <TargetFruitClass name='Sandia' price={3.5}/>
	  <TargetFruitClass name='Melon' price={4.7}/>
	  <TargetFruitClass name='Uva' price={1.0}/>
	</div>
);

export default App
