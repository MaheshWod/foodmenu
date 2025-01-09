// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../Redux/Slices/CartSlices'
// const FoodCart = ({id,title,price, rating, description}) => {
// const dispatch = useDispatch()
//     const fooditem = [
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/a.jpg",
//             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"


//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/b.jpg",
//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"

//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/c.jpg",

//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/d.jpg",
//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"

//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/b.jpg",

//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/d.jpg",
//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"

//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/a.jpg",

//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
//         },
//         {
//             title:'Chcken Currry',
//             price:'100',
//             img : "/c.jpg",

//  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
//         }
//     ]
//   return (
// <>
//     <div className='grid grid-cols-4 gap-8 my-4 '>
//         {
//             fooditem.map((item,index)=>(
//                 <div key={index} className='border shadow flex flex-col rounded-lg '>
//                 <img src={item.img} alt='' className='h-[300px] w-full rounded-t hover:scale-105 cursor-grab transition-all duration-300 ease-in-out'/>

//               <div className='flex my-2'>
//               <label className='py-2 px-4 my-2 text-xl font-semibold mx-auto'>{item.title}</label>
//               <label className='py-2 px-4 my-2 text-red-500  mx-auto font-semibold'>price:{item.price}</label>
//               </div>
//               <div className='my-2 mx-4'>
//                 <p>{item.description.slice(0,40)}...</p>
//               </div>

//               <div className='flex justify-between item-center my-2 mx-4'>
//                 <p className='text-xl font-semibold text-red-500'>Rating:*</p>
//                 <button 
//                 onClick={()=>{
//                     dispatch(addToCart({index,title,price, rating, description,qty:1}))
//                 }}
//                 className='bg-green-500 py-1 px-3 rounded hover:bg-slate-500 text-white font-semibold'>Add To Cart</button>
//               </div>
//                 </div>

//             ))
//         }

//     </div>
// </>  )
// }

// export default FoodCart

// import React, {  useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlices";
import FoodData from "../Data/FoodData";
import Swal from "sweetalert2";


const FoodCart = () => {
  const dispatch = useDispatch();

  // Handle adding item to the cart
  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.name,
        price: item.price,
        rating: item.rate,
        description: item.desc,
        qty: 1,
        image: item.img,
      })
    );

    // Show success alert
    Swal.fire({
      title: "Item Added to Cart!",
      icon: "success", // Corrected typo ("successs" to "success")
      timer: 1000, // Automatically close after 1 second
      showConfirmButton: false,
    });
  };

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state)=>state.search.search)
  return (
    <div className="grid md:grid-cols-4 grid-col-1 md:gap-8 gap-3 md:my-4">
      {FoodData.filter((food) => {
        // Filter items based on selected category
        if (category === "All")
         { 
        return food.name.toLowerCase().includes(search.toLowerCase()); // Show all items for "All" category
        }
        else{
          return category ===food.category && food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        } 
        
        // Match category for specific selection
      }).map((item, index) => (
        <div
          key={index}
          className="border shadow flex flex-col rounded-lg"
        >
          <img
            src={item.img}
            alt={item.name}
            className="md:h-[300px] h-[200px] w-full rounded-t hover:scale-105 cursor-grab transition-all duration-300 ease-in-out"
          />
          <div className="flex md:my-2 my-1">
            <label className="md:py-2 py-1 md:px-4 px-2 md:my-2 my-1 md:text-xl md:font-semibold md:mx-auto">
              {item.name}
              <p>{item.category}</p>
            </label>
            <label className="md:py-2 py-1 md:px-4 px-2 md:my-2 my-1 text-red-500m md:mx-auto font-semibold">
              Price: ${item.price}
            </label>
          </div>
          <div className="my-2 mx-4">
            <p>{item.desc.slice(0, 40)}...</p>
          </div>
          <div className="flex justify-between items-center my-2 mx-4">
            <p className="text-xl font-semibold text-red-500">
              Rating: {item.rate || "*"}
            </p>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-green-500 py-1 px-3 rounded hover:bg-slate-500 text-white font-semibold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCart;



