import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from './Components/MainHeader';

import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import BecomeaHost from './Components/BecomeaHost';
import FindaGroup from './Components/FindaGroup';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {Container, Row, Col, Button} from 'react-bootstrap'


import Image from "react-bootstrap/Image";
import Explorers from './Explorers.PNG';
import ExplorerHome from './ExplorerHome.png';
import tree from './tree.png';

console.log(Explorers);
console.log(ExplorerHome);
console.log(tree);

function App() {
  return (
    <div>
        <div className="A">
          <header className="App-header">
            <div style={{ display: "flex" ,width: 300, alignItems:'center'}}>
              <Image src="./Explorers.png" fluid/>
            </div>
          </header>
          <MainHeader />

      <main fluid>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/BecomeaHost/' element={<BecomeaHost />} />
          <Route path='/Contact/' element={<Contact />} />
          <Route path='/FindaGroup/' element={<FindaGroup />} />
          <Route path='/Login/' element={<Login />} />
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
      