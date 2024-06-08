import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

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
        }
        else {
            console.log('payment method', paymentMethod);
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

            <button className="text-[#a8a7a7] text-lg uppercase font-raleway px-5 py-1 border rounded-sm border-[#6868682f] mt-16" type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default CheckoutForm;