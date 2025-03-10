import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// Excercises:
// 1-Counter

// const Home = () => {
//      const [counter,setCounter]=useState(0);

// 	return (
// 		<div className="container d-flex flex-column align-items-center">
// 		<div className="mb-3"><strong>Counter: {counter}</strong></div> 
// 		<div>
// 		  <button onClick={()=>{setCounter(counter + 1)}} className="btn btn-primary btn-lg rounded mx-2">Increase</button>
// 		  <button onClick={() => {
// 			if(counter > 0){
// 				setCounter(counter - 1)  //you also can use ternary (counter > 0 ? setCounter(counter - 1) : null or counter )
// 			}
// 			else{
// 				counter
// 			}
// 		  }}
// 			className="btn btn-primary btn-lg rounded">Decrease</button>
// 		</div>
// 	  </div>
// 	)
// };

// export default Home;


// 2-Toggle Text with useState

// const Home = () => {
// const[text,setText]=useState("Hello!")
// return (
// 	<div className="container d-flex flex-column justify-content-center align-items-center">
//         <h1>{text}</h1>
// 		<div>
// 		<button onClick={()=>{
// 			(text==="Hello!"? setText("goodbye!") : setText("Hello!") ) 
// 		}}className="btn btn-primary btn-lg">Change!</button>
// 		</div>

// 	</div>


// )



// }



// 	export default Home;