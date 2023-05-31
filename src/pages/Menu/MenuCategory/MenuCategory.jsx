import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='py-8'>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-16'>
           {
                items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
           </div>
        </div>
    );
};

export default MenuCategory;