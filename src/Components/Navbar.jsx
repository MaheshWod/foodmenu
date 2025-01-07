import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/Slices/SearchSlice'
const Navbar = ({children}) => {
  const dispatch = useDispatch()
  return (
    <>

   
    <nav className='py-4 px-10  bg-slate-100  w-full flex justify-between items-center drop-shadow'>
        <div>
            <h3 className=''>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-slate-700 font-semibold text-xl'>Flovour FoodsItems</h1>
        </div>
        <div>
            <input
            type='search'
            name='search'
            id=''
            placeholder='search hera items'
            autoComplete='off'
            className='p-2 border border-grey-400 rounded-md'
            onChange={(e)=>dispatch(setSearch(e.target.value))}
            />
        </div>
    </nav>

    <div >
        {children}
    </div>
    
    </>
  )
}

export default Navbar