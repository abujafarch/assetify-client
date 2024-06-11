import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { Navigate, useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payments = () => {
    const location = useLocation()
    const purchasingPackage = location?.state?.purchasingPackage
    // console.log(location?.state?.purchasingPackage)
    if (!location.state) {
        return <Navigate to='/packages'></Navigate>
    }
    
    return (
        <div>
            <Helmet>
                <title>Payments</title>
            </Helmet>

            <h1 className="font-raleway mb-20 xs:text-xl text-[#a8a7a7] font-light uppercase text-center">payments</h1>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm purchasingPackage={purchasingPackage}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payments;