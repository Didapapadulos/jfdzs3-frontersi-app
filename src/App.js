import React, { Component } from 'react';

import Header from './Layout/Header/header';
import RenderListsWrapper from './components/RenderListsWrapper/renderListsWrapper';
import Footer from './Layout/Footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className='App'>
        <Header />
        <RenderListsWrapper />
        </div>
        <Footer />  
        </div>        
    );
  }
}

export default App;
