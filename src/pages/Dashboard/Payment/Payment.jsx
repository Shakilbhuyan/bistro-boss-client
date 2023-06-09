import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCart } from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={"Please Proccess"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;