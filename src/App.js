import './App.css';
import React, { useState } from 'react';
import ScoreCard from './components/scorecard/ScoreCard';
import ScoreCardButton from './components/scorebutton/ScoreCardButton';
import Message from './components/message/Message';
// import { Member } from './Member.js';
// import AboutUs from './AboutUs.js';

// function App() {
//   const people = [
//     { name: "Chandra", location: "Vizianagaram" },
//     { name: "Monika", location: "YSR Nagar" },
//     { name: "John", location: "New York" },
//     { name: "Jane", location: "Los Angeles" },
//     { name: "Doe", location: "Chicago" },
//     { name: "Smith", location: "Houston" },
//     { name: "Emily", location: "Phoenix" },
//     { name: "Michael", location: "Philadelphia" },
//     { name: "Sarah", location: "San Antonio" },
//     { name: "David", location: "San Diego" },
//     { name: "Laura", location: "Dallas" },
//     { name: "Chris", location: "San Jose" }
//   ];
//   return (
//     <div className="App">
//       <h1 style={{ backgroundColor: "red", textAlign: "center" }}>Welcome to the Member App</h1>
//       <AboutUs />
//       <div className="member-container">
//         {people.map((person, index) => (
//           <Member key={index} name={person.name} location={person.location} />
//         ))}
//       </div>

//     </div>
//   );
// }

function App(props) {
  const {initialScore} = props;
  let [score, scoreFun] = useState(initialScore);

  function incrementCounter(value){
      score = score + value;
      // scoreFun(function (currentValue){
      //   return currentValue+value;
      // });
      scoreFun((currentValue)=>currentValue+value);
  }
    
  return (
    <div><ScoreCard score={score}/>
    <ScoreCardButton scoreCount={incrementCounter}/>
    <Message /></div>
  );
}

export default App;
