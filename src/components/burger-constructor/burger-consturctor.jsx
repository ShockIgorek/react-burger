import React from 'react';
import style from './burger-constructor.module.css';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor(props) {
    const total = props.data.reduce((acc, cur) => acc + cur.price, 0)
    return (
        <div className={`${style.constructor_container} pt-25`}>
            {props.data.length > 0 && 
            <div className="pr-6">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.data[0].name} (верх)`}
                    price={props.data[0].price}
                    thumbnail={props.data[0].image}
                />
            </div>}
            {props.data.length > 0 && 
            <ul className={`${style.list} pl-4 pr-4`}>
                {props.data.map((ingredient, idx) => idx > 0 && idx < props.data.length - 1 && (
                    <li key={idx} className={style.item}>
                        <DragIcon />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </li>
                )
                )}
            </ul>}
            {props.data.length > 0 && 
            <div className="pr-6">
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${props.data[props.data.length - 1].name} (низ)`}
                    price={props.data[props.data.length - 1].price}
                    thumbnail={props.data[props.data.length - 1].image}
                />
            </div>}
            <div className={`${style.button_container} pt-6 pr-6`}>
                <div className='mr-10'>
                    <span className="text text_type_digits-medium mr-2">{total}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button className="pt-10" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
};