import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import Loader from './Loader';
import useToken from '../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user || gUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, from, token])

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'>{error.message || gError.message}</p>
    }

    if (loading || gLoading || sending) {
        return <Loader></Loader>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const handleResetPassword = () => {

    };




    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 shadow-xl border-2 border-white">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Provide a valid email'
                                }
                            })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <p className='text-xl'><small>
                            New to ElecTools? <Link to="/register" className='text-blue-400 font-semibold'>Create an account</Link></small>
                        </p>
                        <p onClick={handleResetPassword} className='mb-2 text-blue-400 text-lg cursor-pointer'>Forgot Password?</p>

                        <input className='btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-secondary sm:btn-sm md:btn-md hover:bg-transparent hover:text-secondary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;