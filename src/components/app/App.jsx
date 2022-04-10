import React from 'react'; 
import { useEffect, useState } from 'react';
import style from './App.module.css';
import AppHeader from '../app-header/app-header'
import Main from '../main/main';
import getIngredients from '../../utils/Api';


export default function App() {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getIngredients()
      .then(res => {
        if (res) {
          console.log(res.data)
          setIngredients(res.data)
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <div className={`${style.app} pb-10`}>
      <AppHeader />
      <Main ingredients={ingredients} />
    </div>
  );
};
