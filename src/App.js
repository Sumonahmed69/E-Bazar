import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Oder from './components/Oder/Oder';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {


const [loggedInUser, setLoggedInUser] = useState({});

  return (
 <UserContext.Provider value={[ loggedInUser, setLoggedInUser]}>
   {/* <p>name {loggedInUser.name}</p> */}

    <Router>

      <Header></Header>



      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/oder">
          <Oder />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>




    </UserContext.Provider>






  );
}

export default App;
