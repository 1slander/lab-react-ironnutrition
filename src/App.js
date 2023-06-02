
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  const [foodsList, setFoodList]= useState(foods)
  const [search,setSearch]=useState("")
  
  const handleDelete = (foodName)=>{
    const deleteFood = foodsList.filter((food)=>{
      if(food.name !==foodName){
        
        
        return true ;
      }
  
    })
    setFoodList(deleteFood)
  }

  

  
  return (
    <div className="App">
      <AddFoodForm foodList={foodsList} setFoodList={setFoodList}/>

      <Button> Hide Form / Add New Food </Button>

      <SearchBar search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
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
        }} handleDelete={handleDelete}/>
      )
    })}
      </Row>
    </div>
  );
}

export default App;
