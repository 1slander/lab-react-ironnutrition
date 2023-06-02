
import { useState } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
function App() {

  const [foodsList, setFoodList]= useState(foods)

  
  return (
    <div className="App">
    <h2>Food List</h2>
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
