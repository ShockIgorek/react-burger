import React from 'react';
import pageStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-consturctor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Popup from '../popup/popup';
import PopupOverlay from '../popup-overlay/popup-overlay';
import Content from '../popup/content/content';




function App() {
  
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = React.useState({
      error: null,
      loading: false,
      items: []
  });

  React.useEffect(() => {
      fetch(url)
          .then(res => res.json())
          .then((result) => {
              setState({...state, loading: true, items: result.data})

          })
          .catch((err) => {
              setState({...state, error: err})
              console.log(`Что-то пошло не так: ${err}`);
          })
  }, [])
  document.body.classList.add(pageStyle.App);
  return (
    <>
      <AppHeader />
      <main className={pageStyle.main}>
        <section >          
          <BurgerIngredients data={state.items}/>
        </section>
        <section>
          <BurgerConstructor data={state.items}/>
        </section>
        <PopupOverlay>
          <Content data={state.items}/>
        </PopupOverlay>

      </main>
    </>
  );
}

export default App;
