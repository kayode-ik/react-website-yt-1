import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home'
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUP from './components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
       {/* Navbar */}
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/services" component={Services} />
         <Route path="/products" component={Products} />
         <Route path="/sign-up" component={SignUP} />

       </Switch>
    </Router>
    </>
  );
}

export default App;
