import logo from './logo.svg';
import './App.css';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Information } from "./components/Information";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Opinions } from './components/Opinions';
import { Loader } from './components/Loader';

import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';


function App() {

  const [loading, setLoading] = useState (false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 4500)
  },[])
  
  
  return (
    <div className="App">
      { loading  ?  <Loader/> : 
      <div>
        <NavBar />
      <Banner />
      <Information/>
      <Skills/>
      <Projects/>

      <Contact/>
      <Footer/>
      </div> 
      
      }

    </div>
    
  );
}

export default App;
