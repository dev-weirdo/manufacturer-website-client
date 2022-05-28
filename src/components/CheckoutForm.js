import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const CheckoutForm = ({ order, setProcessing }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [txId, setTxId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, totalPrice, userName, email } = order;


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price: totalPrice })
            }
        )
            .then(res => res.json())
            .then(data => {

                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrice])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        setCardError(error?.message || '');
        setSuccess('')
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            setTxId(paymentIntent.id)
            setSuccess('Payment Completed')

            const payment = {
                orderId: _id,
                txId: paymentIntent.id
            }

            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 text-center'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500 text-center'>{success}</p>
                    <p className='text-green-500 text-center'>Your Transaction ID: {txId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;