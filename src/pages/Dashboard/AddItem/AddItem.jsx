import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_image_upload;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
            const formData = new FormData();
            formData.append('image', data.image[0])

            fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imageResonse => {
               if(imageResonse.success){
                  const imageURL = imageResonse.data.display_url;
                  const {name, price, category, recipe} = data;
                  const newItem = {name, price: parseFloat(price), category, recipe, image : imageURL}
                 axiosSecure.post('/menu', newItem)
                 .then(data =>{
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'New Menu Added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                 })
               }
            })
    };

    return (
        <div className='w-3/4 my-8 '>
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitle heading={'add an item'} subHeading={"What's new?"} ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-medium">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recepie Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className='flex gap-1 mb-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </label>
                    <select defaultValue={"Pick one"} className="select select-bordered" {...register("category", { required: true })}>
                        <option disabled >Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Dessert</option>
                        <option>Desi</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-medium">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", {required: true})} placeholder="Description"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item image</span>
                    </label>
                    <input type="file"  {...register("image", {required: true})}  className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn bg-orange-600 mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;


