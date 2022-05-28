import React from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const availablequan = e.target.availableQuantity.value;
        const minordquan = e.target.minimumOrderQuantity.value;
        const desc = e.target.description.value;

        const product = { name, price, availablequan, img, minordquan, desc }

        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product added successfully')
                }
            })
        e.target.reset();

    }
    return (

        <div>
            <h1 className='text-4xl font-semibold text-center text-secondary mt-10'>Add a Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="card-body p-0 md:p-8 w-5/6 md:w-3/6 mx-auto  rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder='Product name' className="input input-bordered focus:bg-slate-50" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Image</span>
                        </label>
                        <input type="text" placeholder='Product image URL' className="input input-bordered" name='img' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <input type="number" placeholder='Product price' className="input input-bordered" name='price' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Avaiable Quantity</span>
                        </label>
                        <input type="number" placeholder='Available' className="input input-bordered" name='availableQuantity' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Minimum Order Quantity</span>
                        </label>
                        <input type="number" placeholder='Minimum Order Quantity' className="input input-bordered" name='minimumOrderQuantity' required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Description</span>
                        </label>
                        <textarea className='bg-transparent border border-gray-600 rounded-xl p-3' name="description" placeholder='Short Description about product' cols="30" rows="4" required></textarea>
                    </div>

                    <input className='btn btn-secondary text-accent hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;