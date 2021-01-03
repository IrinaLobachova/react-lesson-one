import React from 'react';
import Post from './post/Post';
//import logo from './logo.svg';

import './App.css';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";


const author = [
	{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }
	]

function App() {
  return (
    <div className="App">
	  {author.map(info => <Post {...info} />)}
    </div>


  );
}

export default App;

