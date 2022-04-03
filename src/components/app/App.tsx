import React from 'react';
import pageStyle from './App.module.css';
import AppHeader from '../app-header/app-header';




function App() {
  document.body.classList.add(pageStyle.App)
  return (
    <>
      <AppHeader />
    </>
  );
}

export default App;
