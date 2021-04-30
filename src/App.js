import './App.css';
import React, { useEffect } from 'react'
import CurrencyRow from './CurrencyRow';

const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {

  useEffect(()=>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <div className="App">
        <h1 className="logo"> Currency converter </h1>
        <CurrencyRow/>
        <h1 className="eq">=</h1>
        <CurrencyRow/>
    </div>
  );
}

export default App;
