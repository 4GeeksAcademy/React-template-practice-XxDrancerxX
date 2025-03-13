import React, { useEffect, useState } from "react";

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

//3-)button that toggles visibility of a paragraph.

// const Home = () => {

//     const [isVisible, setIsVisible] = useState(true);

//     const pStyle = {
//         textAlign: "center",
//         lineHeight: "40px",
//         width: "150px",
//         height: "40px",
//         background: "red",
//         display: isVisible ? "block" : "none"
//     }

//     const bStyle = {
//         width: "150px",
//         height: "40px",
//         background: "lightgray",
//         padding: "5px"
//     }

//     const wrappedP = {
//         width: "150px",
//         height: "40px"
//     }

//     return (
//         <div className="container d-flex flex-column align-items-center">
//             <div style={wrappedP} >
//                 <p style={pStyle}>
//                     Here i am!
//                 </p>
//             </div>
//             <button onClick={() => setIsVisible(!isVisible)} style={bStyle}>
//                 Toggle
//             </button>

//         </div>
//     )
// }
// export default Home;

// //4-)🟡 Medium Level (4-7)
// 4️⃣ Input Field Updater
// 👉 Task: Type something in an input field and show it in real time.

// const Home = () => {
//   const [showInput, setShowInput] = useState("");
  
//   return(
//      <div className="container">
//       <div className="input">
//         <input onChange={(e)=>setShowInput(e.target.value)} type="text" placeholder="Type here" value={showInput}/>
//       </div>
//       <div  className="show-input">
//               {showInput}
//       </div>
//      </div>

//   )
// }
// export default Home;

// //5-)🟡 Medium Level (4-7)
// 5️⃣ Dark Mode Toggle
// 👉 Task: Toggle between light and dark mode.


// const Home = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);


  //Solution 1
//   const lightMode = {
//     backgroundColor: "white",
//     color: "black",
//     width: "150px",
//     height: "120px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   };

//   const darkMode = {
//     backgroundColor: "black",
//     color: "white",
//     width: "150px",
//     height: "120px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   };
 
   
    // return(
    // <div className="container d-flex flex-column align-items-center">
    //     <p style={isDarkMode ? darkMode : lightMode}>darktStyle and lightStyle</p>
    //    <button onClick={() => setIsDarkMode(!isDarkMode)}>
    //    Change here
    //    </button>
    // </div>

//Solution 2
// return (
//     <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", height: "100vh", textAlign: "center" }}>
//         <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
//         <p>{isDarkMode ? "Dark Mode ON" : "Light Mode ON"}</p>
//     </div>



//     )
// }

//     export default Home;

//6-)🟡 Medium Level (4-7)
//6️⃣ Fetch Data with useEffect
// 👉 Task: Fetch and display a random joke when clicking a button.

// const Home = () => {
//     const [joke, setJoke] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
      
//     const getJoke = () => {
//         setIsLoading(true);
//         fetch("https://api.chucknorris.io/jokes/random")
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setJoke(data.value);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setJoke("Failed to fetch joke");
//                 console.log(error);
//                 setIsLoading(false);
//             });
//     }
    
//      useEffect(() => {
//         getJoke();
//      }, []);

//     return(
//              <div className="container d-flex flex-column align-items-center">
//         <h1>Fetch Data with useEffect:</h1>
//         {isLoading ? <p>Loading...</p> : <p>{joke}</p>}
//         <button onClick={getJoke}>We are gonna Fetch</button>

//              </div>

//     )
// }
// export default Home;