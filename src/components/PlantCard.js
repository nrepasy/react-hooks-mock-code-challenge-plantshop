import React, {useState} from "react";

function PlantCard({image, name, price}) {
const [inStock, toggleInStock] = useState(true)


function handleClick(){
  toggleInStock((inStock) => !inStock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
       
        <button className={inStock? "primary" : "" } onClick={handleClick}>
        {inStock? "In Stock" : "Out of Stock"}
        </button>
      
    </li>
  );
}

export default PlantCard;
