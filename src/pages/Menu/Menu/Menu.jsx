import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import { useMenu } from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover img={menuImg} title={"our menu"}></Cover>
         <SectionTitle heading={"Today's offer"} subHeading={"Don't Miss"}></SectionTitle>
         {/* offerd */}
         <MenuCategory items={offered} ></MenuCategory>
         {/* desert */}
         <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>
         {/* pizza */}
         <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
         {/* salad */}
         <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
         {/* soup */}
         <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;