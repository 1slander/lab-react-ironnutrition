
import { useState } from 'react';
import './App.css';
import foods from './foods.json'

function App() {

  const [foodsList, setFoodList]= useState(foods)

  
  return (
    <div className="App">
    <h2>Food List</h2>
    {foodsList.map((food)=>{
      return (
        <div>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} />
      </div>
      )
    })}
      
      
    </div>
  );
}

export default App;
