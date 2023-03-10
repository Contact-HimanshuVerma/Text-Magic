//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

 const toggleMode = ()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been enabled", "Success! ")
  }else{
    setMode("light")
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "Success! ")
  }
 }

  return (
  <>
    
     <Navbar title="Text Magic" abouttext = "About" mode={mode} toggleMode= {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>     
     </div>
    
  </>
  );
}

export default App;
