import React from 'react'
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { removeCart, incrementQty,decrementQty} from '../Redux/Slices/CartSlices'; 
const ItemCarts = ({id,title,image,price,qty}) => {
// console.log(ItemCarts)
// console.log(qty)
// yasma addToCart bata aaune cart or div xa//
    const dispatch = useDispatch()
    return (
        <>
            <div className=' rounded-md shadow-lg border  grid grid-cols-3  my-2 '>
                <div className='items-center '>
                    <img src={image} alt={id} className='p-2 rounded-full h-[80px] w-[80px]' />
                </div>
                <div className='py-2 px-2'>
                    <h1 className='font-semibold text-slate-600'>{title.slice(0,20)}</h1>
                    <span className='font-semibold  block text-green-500 mt-2'>${price}</span>
                </div>

                <div className=' py-2 px-2 '>
                <div className='ml-11 mr-1'>
                <MdDelete onClick={()=>dispatch(removeCart({id,title,image,price}))}
                className=' text-xl cursor-pointer  hover:text-green-600' />
                </div>
                <div className='flex gap-1 mt-3'>
                    <CiCirclePlus onClick={()=> qty =1 ? dispatch(incrementQty({ id })) : (qty = 0)}
                    className='text-xl mt-1 text-black cursor-pointer hover:text-grey-300 hover:bg-green-500 hover:rounded'/>
                    <span className='text-[18px] text-green-600 '>{qty}</span>

                    <CiCircleMinus onClick={()=> qty>1 ? dispatch(decrementQty({ id })) : (qty = 0)}
                    className='mt-1 text-xl text-black cursor-pointer hover:text-grey-300 hover:bg-green-500 hover:rounded'/>

                </div>
                </div>

            </div>
          
        </>
    )
}

export default ItemCarts