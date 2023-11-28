
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


//JSX is basically 95-98% html the only difference is that the keywords like class, for which is both in html and js so the keywords for html will be like className for class and htmlFor for for loop 
function App() {
  const[mode, setMode] = useState('light');//whether dark mode is enabled or not
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const removeMode= () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeMode()
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode is enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "Textutils" aboutText = "About" mode = {mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert= {alert}/>
    <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About  mode = {mode}/>} /> */}
      {/* <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode = {mode}/>}/> */}
      <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode = {mode}/>
    {/* </Routes> */}
    {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode = {mode}/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
