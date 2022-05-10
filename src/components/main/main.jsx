import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-consturctor';
import style from './main.module.css';

export default function Main() {

  return (
    <main className={style.main}>
      <section className={style.main_container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </main>
  );
};