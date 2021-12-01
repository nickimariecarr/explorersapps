import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from './MainHeader';
import outside from './outside.mp4';
import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';

//pages
import Home from './home';
import About from './about';
import BecomeaHost from './BecomeaHost';
import Contact from './contact';
import Login from './login';

//elements
import {Container, Row, Col, Button} from 'react-bootstrap';

//assets
import FindaGroup from './FindaGroup';
import Signup from './SignUp';

function App() {
  return (
    <div>
        <div className="A">
          <header className="App-header">
            <video width="100%" height="100%" autoPlay loop defaultMuted playsInline muted>
              <source src={outside} type="video/mp4"/>
            </video>
              <MainHeader />
          </header>
            <main fluid>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/BecomeaHost' element={<BecomeaHost />} />
                <Route path='/findagroup' element={<FindaGroup />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/SigUp' element={<Signup />} />
              </Routes>
            </main>
        </div>

        <div className="color-nav" style={{display: "flex", alignItems:'center',height: "30px"}}>
              <Container >
                <footer className="color-nav" >
                    © Teeny Tiny Explorers 2021

                </footer>
              </Container>
          </div>
    </div>
  );
}

export default App;
      