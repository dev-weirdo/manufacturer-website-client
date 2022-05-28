import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm';
import Loader from '../Loader';

const stripePromise = loadStripe('pk_test_51L4FpQBm1q4c8l9Pz22F1UOLXFmEW9wTMM6P7cVooUxWN75pLMiKAHm3bDoNly3CE4idrRRu7FdE05cO2OYE9FHF00FTJ3M5HX');

const Payment = () => {
    const { id } = useParams();
    const url = `https://radiant-castle-94572.herokuapp.com/orders/${id}`;

    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>
    }

    const { toolName, totalPrice, userName } = data;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-secondary text-accent shadow-xl my-10">
                <div className="card-body">
                    <h2 className="card-title">Hello, {userName}</h2>
                    <h2 className="card-title">Pay for {toolName}</h2>
                    <p>Paying amount: ${totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={data}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;