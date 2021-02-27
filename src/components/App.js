import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";


function App() {
const [plants, setPlants] =useState([])

  useEffect(()=> {
    fetch('http://localhost:6001/plants')
      .then(res=>res.json())
      .then(data => setPlants(data))
  }, [])

console.log(plants)

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
