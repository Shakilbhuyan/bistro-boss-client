import React from 'react';

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className='absolute right-0 mt-4 mr-4 p-2 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;