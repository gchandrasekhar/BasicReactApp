import './App.css';
import React, { use, useEffect, useState } from 'react';
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
  const [posts, setPosts] = useState([]);

  function incrementCounter(value){
      score = score + value;
      // scoreFun(function (currentValue){
      //   return currentValue+value;
      // });
      scoreFun((currentValue)=>currentValue+value);
  }

  useEffect(() => {
    console.log("NETWORK NETWORK NETWORK");
    async function getData(){
      const fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts');
      const getData = await fetchResult.json();
      console.log(getData);
      setPosts(getData);
    }
    if(score%5 === 0 && score !== 0){
      getData();
    }
  }
  , [score]);

  useEffect(() => {
    console.log("HI HI HI");
  }, []);

  useEffect(() => {
    console.log("HELLO HELLO HELLO");
  }, []);
    
  return (
    <div><ScoreCard score={score}/>
    <ScoreCardButton scoreCount={incrementCounter}/>
    <Message />
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
