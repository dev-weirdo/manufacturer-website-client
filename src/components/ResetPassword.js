import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loader from './Loader';

const ResetPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (sending) {
        return <Loader></Loader>
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sent')
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleResetPassword} className="form-control max-w-sm my-12 text-white mx-auto border-2 p-5 rounded-md">
                <h1 className='text-3xl text-center my-5'>Reset Password</h1>
                <label className="input-group">
                    <span>Email</span>
                    <input name='email' type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
                <button type='submit' className='btn btn-secondary my-4 w-2/4 mx-auto'>Reset</button>
            </form>
        </div>
    );
};

export default ResetPassword;