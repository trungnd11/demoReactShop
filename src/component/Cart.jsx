import { Button } from 'bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteCart } from '../redux/action/index';

const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    console.log(state)

    const handleClose = (item) => {
        dispatch(deleteCart(item));
    }

    const cartProducts = (item) => {
        return (
            <div className="container bg-light py-4 my-5" key={item.id}>
                    <button className='btn-close float-end' aria-label='Close' 
                        onClick={() => handleClose(item)}
                    >
                    </button>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <img src={item.image} alt={item.title} width={180} height={200} />
                        </div>
                        <div className="col-md-9">
                            <h3>{item.title}</h3>
                            <p className='lead fw-bold'>${item.price}</p>
                            <p className='lead p-0'>Số lượng: {item.qty}</p>
                        </div>
                    </div>
                </div>
        )
    }

    const showCartEmpty = () => {
        return (
            <div className="container bg-light py-4 my-5">
                <div className="row">
                    <h2 className='text-center'>Empty Cart</h2>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className='container'>
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
                        Proceed To CheckOut
                    </NavLink>
                </div>
            </div>
        )
    }

    return (
        <>  
            {state.length === 0 && showCartEmpty()}
            {state.length !== 0 && state.map(cartProducts)}
            {state.length !== 0 && button()}
        </>
    );
}
export default Cart;