
import { useState } from 'react';

import './App.css'

 function App() {
  // eslint-disable-next-line no-undef
  let [counter, setCounter] =useState(15)

  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
    <h1> Chai aur react</h1>
    <h2>Counter value :{counter}</h2>
    <button onClick={addValue}>Add value {counter}</button><br/>
    <button onClick={removeValue}>Remove Value{counter}</button>
     
    </>
  );
}

export default App
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // This function will run after the component is mounted

//     // Define an asynchronous function for data fetching
//     const fetchData = async () => {
//       try {
//         // Set loading to true while data is being fetched
//         setLoading(true);

//         // Fetch data from an API (replace with your API endpoint)
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result = await response.json();

//         // Update state with the fetched data
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         // Set loading to false once data is fetched (whether successful or not)
//         setLoading(false);
//       }
//     };

//     // Call the fetchData function
//     fetchData();

//     // The cleanup function returned by useEffect (optional)
//     return () => {
//       // Perform cleanup if needed (e.g., unsubscribe from a subscription)
//     };
//   }, []); // The empty dependency array means this effect runs once on mount

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
