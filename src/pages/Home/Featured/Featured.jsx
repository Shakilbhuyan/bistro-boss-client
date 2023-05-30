import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import moment from 'moment/moment';
import  './featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20'>
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-20 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 text-white'>
                    <p>{moment().format("MMM Do YYYY") }</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio ut quo. Praesentium optio excepturi odio odit, qui hic, ex omnis consequatur id a debitis eveniet, molestiae cum fugit. Voluptas, molestias ipsa. Saepe molestiae suscipit id libero sit soluta repellendus voluptatibus explicabo dolorum dignissimos eius, eveniet voluptate, quia tempore nostrum?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;