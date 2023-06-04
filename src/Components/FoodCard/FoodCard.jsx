import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';


const FoodCard = ({item}) => {
    const {image, price, recipe, name, _id} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useContext(AuthContext);
    const [ ,refetch] = useCart();
    const handleAddToCart = (item)=>{
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
           console.log(item);
           if(user && user.email){
            fetch('http://localhost:5000/carts',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();      // refetch cart for update thge number of cart
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Added Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
           }
           else{
            Swal.fire({
                icon: 'error',
                title: 'Aren`t You Login?',
                text: 'Please Login!'
              });
              navigate('/login' ,{state: {from: location}})
           }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className='absolute right-0 mt-4 mr-4 p-2 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={ () => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 mt-4">Add To Cart</button>
                 
                </div>
            </div>
        </div>
    );
};

export default FoodCard;