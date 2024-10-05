import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <NavBar />
        <Routes> 
            <Route path='/' element={<Header />} />
        </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
