import './App.css';
import Home from "./Compomemts/Home";
import Footer from "./Compomemts/Footer";
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from "./Compomemts/Signup";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact='true' path='/'><Home/></Route>
            <Route exact='true' path='/login'><Signup/></Route>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
