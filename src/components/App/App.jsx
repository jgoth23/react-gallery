import React from 'react';
import './App.css';
import{useState} from 'react';

function App() {
  //likeCount tracks my state
  //setLikeCount lets me change the value of state
    const [likeCount, setLikeCount] = useState(0);
  return (
    
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Here it is!</p>
        <img src="images/goat_small.jpg"/>
        <div>
        <p>Your photo has this many likes! {likeCount}</p>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            Love this!
          </button>
          
        </div>
      
      </div>
      
    );
}

export default App;
