import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Information } from "./components/Information";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {


  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Information/>
      <Skills/>
      <Projects/>

    </div>
  );
}

export default App;
