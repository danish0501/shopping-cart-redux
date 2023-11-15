import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartPage = ({ getId }) => {
    const [removeCart, setRemoveCart] = useState([]);
    // console.log(removeCart)
    const location = useLocation();
    // console.log(location.state)

    const navigate = useNavigate();


    const total = removeCart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

    useEffect(() => {
        setRemoveCart(location.state)
    }, [location])


    const removeFromCart = (item) => {
        const updatedCart = removeCart.filter((i) => i !== item);
        setRemoveCart(updatedCart);
        // console.log("Updated Cart:", updatedCart);
    };

    const handleCheckout = () => {
        console.log("button clicked")
        navigate("/")
    }

    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>My Cart</h1>
            <div className="checkout-page">
                <div className="checkout-main">
                    {
                        removeCart.map((item, index) => {
                            return (
                                <div key={index} style={{ width: "33%", float: "left", padding: "5px", marginTop: "2rem" }}>
                                    <img src={item.thumbnail} alt={item.title} style={{ width: "200px", height: "300px" }}></img>
                                    <p>Title: {item.title}</p>
                                    <p>Price: {item.price}</p>
                                    <button
                                        style={{ width: "200px", background: "black", color: "white", border: "none", padding: "5px" }}
                                        onClick={() => removeFromCart(item)}
                                    >Remove From Cart</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="checkout-bill">
                    {
                        total !== 0 ? (<div className='product-container'>
                            <p className='checkout'>Checkout List</p>
                            {
                                removeCart && removeCart.map((item, index) => {
                                    return <p className='cart-item' key={index}><span>{item.title}</span><span>$ {item.price}</span></p>
                                })
                            }
                            <hr />
                            <p className='total'><span>Total</span><span>$ {total}</span></p>
                            <hr />
                        </div>) : <h1>Your cart is empty...</h1>
                    }
                    <div className="checkout-div">
                        <button className="checkout" onClick={handleCheckout}>Click To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;