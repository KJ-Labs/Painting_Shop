import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';


const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }


    const fetchCart = async () => {
        await commerce.cart.retrieve();
        setCart(cart)

    }


    const handleAddToCart = async (proudctId, quantity) => {
        const item = await commerce.cart.add(proudctId, quantity);
        setCart(item.cart);


    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


    console.log(cart)
    return (
        <div>

            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default App;