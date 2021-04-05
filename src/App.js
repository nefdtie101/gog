import './App.css';
import Home from "./Compomemts/Home";
import Login from "./Compomemts/Login";
import HomePage from "./Compomemts/HomePage";
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from "./Compomemts/Signup";
import ResetPass from "./Compomemts/Forgottin password";
import NewPass from "./Compomemts/EnterNewPass";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact='true' path='/login/forgetpass'><ResetPass/></Route>
            <Route exact='true' path='/'><Home/></Route>
            <Route exact={true} path='/login'><Login/></Route>
            <Route exact='true' path='/sign-up'><Signup/></Route>
            <Route  path='/home'><HomePage/></Route>
            <Route path='/login/reset'><NewPass/></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
