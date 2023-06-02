
import { useState } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodsList, setFoodList]= useState(foods)
  

  // const addNewFood = (food)=>{
  //   const updatedFoodList = [...foodsList,food];
  //   setFoodList(updatedFoodList)
  // }

  
  return (
    <div className="App">
    <h2>Food List</h2>
    <AddFoodForm foodList={foodsList} setFoodList={setFoodList}/>
    {foodsList.map((food)=>{
      return (
       <FoodBox food={{
        name : food.name,
        calories : food.calories,
        image: food.image,
        servings: food.servings
       }}/>
      )
    })}
      
      
    </div>
  );
}

export default App;
