import './App.css';
import React, { useEffect, useState } from "react";
import ShowData from './components/ShowData';
import MovieBooking from './components/MovieBooking';
import TicketBooking from './components/TicketBooking';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




function App() {

  
  return (
    <>
      <Router>
      <div>   
        <Routes>
          <Route exact path="/" element={<ShowData/>}></Route>
          <ShowData/>
          <Route exact path="/MovieBooking" element={<MovieBooking/> } />
          
          <Route exact path="/TicketBooking" element={<TicketBooking/> } />
          
        </Routes>    
      </div>
      </Router>
      </>
    
  );
}

export default App;
