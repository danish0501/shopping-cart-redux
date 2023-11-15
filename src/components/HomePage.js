import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/apiAction";
import * as Loader from "react-loader-spinner";


const HomePage = ({getId}) => {
    
    const [cart, setCart] = useState([]);

    const { data, loading, error } = useSelector(state => state.api)
    // console.log(data)

    const dispatch = useDispatch();


    const addToCart = (item) => {
        const updatedCart = [...cart];
        updatedCart.push(item);
        setCart(updatedCart);
        // console.log(updatedCart);
        getId([...updatedCart])
    };

    
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", justifyContent: "center", display: "flex" }}>
                <Loader.Rings size={200} color="blue" height={150} width={150} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>All Items</h1>
            {
                data && data.products && data.products.map((item, index) =>
                    <div key={index} style={{ width: "25%", float: "left", padding: "5px", marginTop: "2rem" }}>
                        <img src={item.thumbnail} alt={item.title} style={{ width: "200px", height: "300px" }}></img>
                        <p>Title: {item.title}</p>
                        <p>Price: ${item.price}</p>
                        <button
                            style={{ width: "200px", background: "black", color: "white", border: "none", padding: "5px" }}
                            onClick={() => addToCart(item)}
                        >Add To Cart</button>
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;