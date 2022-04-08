import React from 'react';
import pageStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-consturctor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';





function App() {
  document.body.classList.add(pageStyle.App);
  return (
    <>
      <AppHeader />
      <main className={pageStyle.main}>
        <section >          
          <BurgerIngredients />
        </section>
        <section>
          <BurgerConstructor />
        </section>

      </main>
    </>
  );
}

export default App;
