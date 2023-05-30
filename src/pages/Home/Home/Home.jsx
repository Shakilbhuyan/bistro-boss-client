import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManu from '../PopularMenu/PopularManu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularManu></PopularManu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;