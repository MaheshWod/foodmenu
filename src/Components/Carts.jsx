import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import ItemCarts from './ItemCarts';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { clearCart } from '../Redux/Slices/CartSlices';
// yasma slide or cart box or div xa jasam ItemCart xa
const Carts = ({ id, title, image, price, description, rating, qty }) => {
  const [activeCart, setActiveCart] = useState(false)
  const cartItems = useSelector((state) => state.cart.cart)
  // console.log(cartItems)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const successCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Cart is Empty!",
        icon: "warning",
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    Swal.fire({
      title: "Checkout Successful!",
      icon: "success",
      timer: 4000,

    }).then(() => {
      dispatch(clearCart());
      // Clear all items from the cart
      setActiveCart(false)
      navigate('/')

    });

  };

  return (
    <>
      <div className={`fixed top-0 right-1  bg-white w-[270px] h-screen py-4 px-4 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>My Order</h1>

          <CiCircleRemove onClick={() => setActiveCart(!activeCart)}
            className='text-2xl cursor-pointer' />
        </div>


        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return <ItemCarts key={food.id}
              id={food.id}
              title={food.title}
              price={food.price}
              image={food.image}
              qty={food.qty}
            />
          }) : <h1 className='text-xl font-semibold text-center my-4'>Your Cart is Empty</h1>
        }
        {/* yaslai ItemCarts ma receive garne */}

        <div className='flex flex-col gap-y-2 my-2 absolute bottom-0  mb-8'>
          <h2 className=' font-semibold'>TotalItems:{totalQty}</h2>
          <label>Total Amount:{totalPrice}</label>
          <button onClick={successCheckout}
            className=' px-8 py-1 hover:bg-slate-600 bg-green-500 rounded-md text-white font-semibold'>CheckOut</button>
        </div>


      </div>

      <FaCartShopping onClick={() => setActiveCart(!activeCart)}
        className={`p-2 bg-slate-400 text-white text-4xl fixed bottom-4 right-4 rounded-full hover:bg-slate-600
        ${totalQty > 0 && "animate-bounce delay-500 transition-all bg-yellow-500"}`} />
    </>
  )
}

export default Carts