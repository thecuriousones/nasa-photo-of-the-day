import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import Header from './header';
import Body from './body';

function App() {
  const [data, setData] = useState([])
  
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=o1BJ5HvjR2mgeb4ehasvY5So1whICBknkvApTFWa&date=2021-04-28')
    .then(({data}) => {
      setData(data)
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        <Header data = {data}/>
        <Body data = {data}/>
      </p>
    </div>
  );
}

export default App;
