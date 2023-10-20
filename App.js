import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode is enabled", "success");
      document.title='Textutils -Dark mode';
      setInterval(() => {
        document.title='Textutils -amazing';

      }, 2000);
      setInterval(() => {
        document.title='Install now textutils';

      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success");
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils22" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>

        <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route  path="/">
          <TextForm  showalert ={showalert} heading="ENTER TEXT To analyze" mode={Mode} />
          </Route>
          <Route  path="/about">
            <About />
          </Route> */}

           <Route exact path="/about" element={<About mode={Mode}/>} />
          
          < Route exact path="/"
            element= {<TextForm heading="TextUtils -word counter, Character counter,remove extra spaces: " mode={Mode} showAlert={showalert} />} />
          
    </Routes> 
   

        
        </div>

        </BrowserRouter>
    </>
  );
}

export default App;
