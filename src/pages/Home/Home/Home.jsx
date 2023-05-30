import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManu from '../PopularMenu/PopularManu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularManu></PopularManu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;