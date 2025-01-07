import React from 'react'
// import FoodItems from '../Components/FoodItems'
import CategoryMenu from '../Components/CategoryMenu'
import Navbar from '../Components/Navbar'
import Carts from '../Components/Carts'
const Home = () => {
  return (
    <>
    <Navbar>
   
    <CategoryMenu/>
    {/* <FoodItems/> */}
    <Carts/>

    </Navbar>
    
    </>
  )
}

export default Home