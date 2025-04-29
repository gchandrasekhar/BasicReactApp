import './App.css';
import React, { useState } from 'react';
// import ScoreCard from './components/scorecard/ScoreCard';
// import ScoreCardButton from './components/scorebutton/ScoreCardButton';
// import Message from './components/message/Message';
import DrawButton from './components/drawbutton/DrawButton';
import './components/drawbutton/DrawButton.css';
import { Member } from './Member.js';
import AboutUs from './AboutUs.js';

function App() {
  const people = [
    { name: "Chandra", location: "Vizianagaram" },
    { name: "Monika", location: "YSR Nagar" },
    { name: "John", location: "New York" },
    { name: "Jane", location: "Los Angeles" },
    { name: "Doe", location: "Chicago" },
    { name: "Smith", location: "Houston" },
    { name: "Emily", location: "Phoenix" },
    { name: "Michael", location: "Philadelphia" },
    { name: "Sarah", location: "San Antonio" },
    { name: "David", location: "San Diego" },
    { name: "Laura", location: "Dallas" },
    { name: "Chris", location: "San Jose" }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setSelectedIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "red", textAlign: "center" }}>Welcome to the Member App</h1>
      <AboutUs />
      <div className="member-container">
        {people.map((person, index) => (
          <Member key={index} name={person.name} location={person.location} isSelected={index === selectedIndex} />
        ))}
      </div>
      <div className="draw-button-container">
        <DrawButton style={{ display: "flex", justifyContent: "center" }} onClick={handleDraw} />
      </div>

    </div>
  );
}

// function App() {
//   let [score, scoreFun] = useState(0);

//   function incrementCounter(value){
//       score = score + value;
//       scoreFun(score);
//   }
    
//   return (
//     <div><ScoreCard score={score}/>
//     <ScoreCardButton scoreCount={incrementCounter}/>
//     <Message /></div>
//   );
// }

export default App;
