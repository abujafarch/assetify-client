import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuthInfo from "../../../../hooks/useAuthInfo";


const CheckoutForm = () => {

    const { user } = useAuthInfo()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: 75 })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('payment error: ', confirmError);
        }
        else {
            console.log('payment intent: ', paymentIntent);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: 'aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        }
                    },
                }}
            />

            <button className="text-[#a8a7a7] text-lg uppercase font-poppins font-light px-5 py-1 border rounded-sm border-[#6868682f] mt-16" type="submit"
                disabled={!stripe || !clientSecret}>
                Pay $5
            </button>

            <p className="text-red-600 mt-5 font-raleway uppercase">{error}</p>
        </form>
    );
};

export default CheckoutForm;