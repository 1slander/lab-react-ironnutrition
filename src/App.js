
import { useState } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  const [foodsList, setFoodList]= useState(foods)
  const [search,setSearch]=useState("")
  

  

  
  return (
    <div className="App">
    
    <SearchBar search={search} setSearch={setSearch} />
    <AddFoodForm foodList={foodsList} setFoodList={setFoodList}/>
    <h2>Food List</h2>
    {foodsList.filter((foodItem)=>{
      if(foodItem.name.toLowerCase().includes(search.toLowerCase())){
        return true
      }
    })
      .map((food)=>{
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
