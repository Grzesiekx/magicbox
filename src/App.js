import React from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLink  from './components/ImageLink/ImageLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLink />
      {/* <Output /> */}
    </div>
  );
}

export default App;
