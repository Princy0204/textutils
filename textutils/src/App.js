
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
   }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else {
      setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title="TextUtils-Light Mode";
  
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}
export default App;
