import React from 'react';
import user from '../assets/user.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'

const Portfolio = () => {

    return (
        <div className="hero min-h-screen text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Name: Md. Mazharul Islam</h1>
                    <p className="py-6 text-2xl">
                        Email: dev_weirdo@protonmail.com
                    </p>
                    <div className="py-6 text-xl">
                        <p className='text-accent text-2xl'>Education: </p>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className=''>
                                    <tr>
                                        <th></th>
                                        <th className='text-lg'>Degree</th>
                                        <th className='text-lg'>Subject</th>
                                        <th className='text-lg'>Passing year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className=''>1</th>
                                        <td>SSC</td>
                                        <td>Science</td>
                                        <td className=''>2015</td>
                                    </tr>
                                    <tr className="hover">
                                        <th className=''>2</th>
                                        <td>HSC</td>
                                        <td>Science</td>
                                        <td className=''>2017</td>
                                    </tr>
                                    <tr>
                                        <th className=''>3</th>
                                        <td>B.Sc.</td>
                                        <td>Computer Science and Engineering</td>
                                        <td>2018-2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <p className="py-6 text-2xl"><span className='text-white'>
                        Skills: <p className='text-white font-semibold text-2xl mt-3'>I am a MERN Stack Developer</p> </span>
                        <div className='bg-white p-8 rounded'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                <div>
                                    <img className='w-16 mx-auto' src={html} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>HTML5</p>
                                </div>
                                <div>
                                    <img className='w-12 mx-auto' src={css} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>CSS3</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src={js} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>JavaScript</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src={react} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>ReactJS</p>
                                </div>
                                <div>
                                    <img className='w-20 mx-auto' src={node} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>NodeJS</p>
                                </div>
                                <div>
                                    <img className='w-12 mx-auto' src={mongo} alt="" />
                                    <p className='font-semibold text-lg text-black mt-1'>MongoDB</p>
                                </div>
                            </div>

                        </div>
                    </p>
                    <div className='text-xl'>
                        <p className='text-accent text-2xl'>Here are my own 3 projects link:</p>

                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className='text-white'>
                                    <tr>
                                        <th></th>
                                        <th className='text-lg'>Project Name</th>
                                        <th className='text-lg'>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover">
                                        <th className='text-secondary'>1</th>
                                        <td>ElecTools</td>
                                        <td>
                                            <a href='https://warehouse-management-c6755.web.app/'
                                                target="_blank" rel="noopener noreferrer" ><span className='underline'>https://warehouse-management-c6755.web.app/</span></a>
                                        </td>
                                    </tr>
                                    <tr className="hover">
                                        <th className='text-secondary'>2</th>
                                        <td>Grocery Warehouse</td>
                                        <td>
                                            <a href='https://warehouse-management-c6755.web.app/'
                                                target="_blank" rel="noopener noreferrer" > <span className='underline'>https://warehouse-management-c6755.web.app/</span></a>
                                        </td>
                                    </tr>
                                    <tr className="hover">
                                        <th className='text-secondary'>3</th>
                                        <td>FOTO</td>
                                        <td>
                                            <a href='https://foto-45232.web.app/'
                                                target="_blank" rel="noopener noreferrer" > <span className='underline'>https://foto-45232.web.app/</span></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;