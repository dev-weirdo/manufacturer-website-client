import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loader from '../Loader';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data: profile, isLoading, refetch } = useQuery('profile', () =>
        fetch(`http://localhost:5000/profile?email=${user.email}`,
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        ).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loader></Loader>
    }

    const { education, city, district, phone } = profile

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const email = user.email;
        const education = e.target.education.value;
        const city = e.target.city.value;
        const district = e.target.district.value;
        const phone = e.target.phone.value;

        const updateProfile = { education, city, district, phone };

        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Profile Updated')
            });
        e.target.reset();
    }
    return (
        <div>

            <h1 className='text-4xl font-bold text-white text-center mt-5'>About Me</h1>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className='mx-auto'>
                    <div className="avatar w-full">
                        <div className="w-48 rounded-full mx-auto">
                            <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center text-white">
                        <h2 className="card-title text-2xl"><span className='font-bold'>Name:</span> {user?.displayName}</h2>
                        <p className='text-xl'><span className='font-bold'>Email:</span> {user?.email}</p>
                        <p className='text-xl'><span className='font-bold'>Education:</span> {education}</p>
                        <p className='text-xl'><span className='font-bold'>City:</span> {city}</p>
                        <p className='text-xl'><span className='font-bold'>District:</span> {district}</p>
                        <p className='text-xl'><span className='font-bold'>Phone:</span> {phone}</p>
                    </div>
                </div>
            </div>

            <h1 className='text-4xl font-bold text-white text-center mt-5'>Update your details</h1>
            <form onSubmit={handleProfileUpdate}>
                <div className="card-body p-0 md:p-8 w-5/6 md:w-3/6 mx-auto  rounded-lg text-white">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" placeholder='Education' className="input input-bordered" name='education' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" placeholder='City' className="input input-bordered" name='city' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">District</span>
                        </label>
                        <input type="text" placeholder='District' className="input input-bordered" name='district' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder='Phone Number' className="input input-bordered" name='phone' required />
                    </div>

                    <input className='btn btn-secondary hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;