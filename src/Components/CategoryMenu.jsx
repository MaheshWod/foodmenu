import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart'
import FoodData from '../Data/FoodData'
import { setCategory } from '../Redux/Slices/CategorySlice'
import { useDispatch,useSelector } from 'react-redux'
const CategoryMenu = () => {

  const [categories,setCategories]= useState([])

  const dispatch = useDispatch()
  const ListUniqueCategories = ()=>{
    const uniqueCategores = [
      ...new Set(FoodData.map(food=>food.category))
    ]
    setCategories(uniqueCategores)
  }


 

  useEffect(() => {
    ListUniqueCategories();
  }, []);

  console.log(categories);

  const selectedCategory = useSelector((state)=>state.category.category)

  return (
 
    <div className="mt-6 mx-10">
    <h1 className="text-xl font-semibold">Find the Delicious Food</h1>
    <div className="flex gap-4 my-3">
     
          <button onClick={()=>dispatch(setCategory("All" ))}
         className={`py-1 px-3 text-white font-semibold bg-slate-500 rounded hover:bg-green-400 ${
            selectedCategory === "All" ? "bg-green-500" : ""}`}>
        
        All
        </button>
    
      
        {categories.map((category, index) =>{
        return (
          <button onClick={()=>dispatch(setCategory(category))}
        key={index} className={`py-1 px-3 text-white font-semibold bg-slate-500 rounded hover:bg-green-400 ${selectedCategory === category ? "bg-green-500" : ""}`}>
          {category}
        </button>
        )
      } 
      )}
    
    </div>
    <FoodCart /> Renders the food items
  </div>
  )
}

export default CategoryMenu

// import React, { useEffect, useState } from 'react';
// import FoodCart from './FoodCart';
// import { useDispatch } from 'react-redux';

// const CategoryMenu = () => {
//   const [categories, setCategories] = useState([]);

//   const ListUniqueCategories = () => {
//     const foodItems = FoodCart(); // Call FoodCart to get the data
//     const uniqueCategories = [...new Set (foodItems.map((food) => food.category))];
//     setCategories(uniqueCategories);
//   };

//   useEffect(() => {
//     ListUniqueCategories();
//   }, []);

//   return (
    // <div className="mt-6 mx-10">
    //   <h1 className="text-xl font-semibold">Find the Delicious Food</h1>
    //   <div className="flex gap-4 my-3">
    //     {categories.map((category, index) => (
    //       <button key={index} className="py-1 px-3 text-white font-semibold bg-slate-500 rounded hover:bg-green-400">
    //         {category}
    //       </button>
    //     ))}
    //   </div>
    //   <FoodCart /> {/* Renders the food items */}
    // </div>
//   );
// };

// export default CategoryMenu;


