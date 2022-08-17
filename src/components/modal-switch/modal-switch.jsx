import style from './modal-switch.module.css';
import { useLocation, Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import ProtectedRoute from '../protected-route/protected-route';
import { changeOrderDetailsPopupState, changeIngredientsPopupState } from '../../services/actions/modal';
import { deleteSelectedIngredient } from '../../services/actions/ingredients';
import { deleteOrderData } from '../../services/actions/order';
import Main from '../main/main';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientCalories from '../ingredient-calories/ingredient-calories';



const ModalSwitch = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const orderData = useSelector(state => state.orderData.orderDetails);
    // const isIngredientsPopupOpen = useSelector(state => state.popupState.isIngredientsPopupOpen);
    const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);

    const handlePopupClose = () => {
        isOrderDetailsPopupOpen ? dispatch(changeOrderDetailsPopupState(false)) : dispatch(changeIngredientsPopupState(false));
        isOrderDetailsPopupOpen ? dispatch(deleteOrderData()) : dispatch(deleteSelectedIngredient())
        history.goBack();
    }

    const location = useLocation();
    // const history = useHistory();
    let background = location.state && location.state.background;
    return (
        <div className={`${style.container} pb-10`}>
            {/* <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch> */}

            <Switch location={background || location}>
                <Route exact path="/">
                    {/* <section className={mainStyles.main_container}>
            <BurgerIngredients />
            <BurgerConstructor onDropHandler={handleDrop} />
          </section> */}
                    <Main />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route path="/reset-password">
                    <ResetPassword />
                </Route>
                <ProtectedRoute path="/profile">
                    <Profile />
                </ProtectedRoute>
                <ProtectedRoute path="/profile/orders">
                    <Profile />
                </ProtectedRoute>
            </Switch>


            {background && (
                <Route
                    path='/ingredients/:ingredientId'
                    children={
                        <Modal handlePopupClose={handlePopupClose} title='Детали ингредиентов'>
                            <IngredientCalories />
                        </Modal>
                    }
                />
            )}
            {background && (
                <ProtectedRoute
                    path='/profile/orders/:orderNumber'
                    children={
                        <Modal handlePopupClose={handlePopupClose}>
                            {orderData ? <OrderDetails /> : <h1>Ждите</h1>}
                        </Modal>
                    }
                />
            )}
        </div>
    );
}

export default ModalSwitch; 