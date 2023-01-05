import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let d = new Date().toLocaleTimeString();
  const state = useState();
  const [currentTime, setTime] = useState(d);


 setInterval(() => {

  d = new Date().toLocaleTimeString();
  setTime(d);

 },1000)

  return (
    <>
      <div style={{display:'flex',alignItems:'center',height:'100vh',justifyContent:'center'}}>
        <div className='clock__container'>
          <h3 style={{textAlign:'center'}}>Digital Clock</h3>
          <h1 style={{textAlign:'center'}}>{currentTime}</h1>
        </div>
      </div>
      
    </>
  );
}

export default App;
