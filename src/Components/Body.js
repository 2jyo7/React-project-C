import React, { useEffect, useState } from "react";
import ClothData from "./ClothData";
import { options, url } from "./Constants";

const Body = () => {
 const [cardData, SetCardData] = useState([]);
 const [filterCard, SetFilterCard] = useState([]);
 const [searchText, SetSearchText] = useState("");
  useEffect(() => {
    fetchData();
},[])

const fetchData = async () => {
 const data = await fetch(url,options);
 const json = await data.json();
 console.log(json);
 SetCardData(json?.products);
 SetFilterCard(json?.products);
}

  return (
    <div className="body">
             <form className="d-flex" role="search">
        <input className="form-control me-2" type="text"  value={searchText} placeholder="Search"
        onChange={(e) => {
          SetSearchText(e.target.value)}} aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={() => {
        const filterCard = cardData.filter((p) => p.name.toUpperCase().includes(searchText.toUpperCase()));
        SetFilterCard(filterCard);
        }} type="submit">Search</button>
      </form>

 <div className="cardInfo">
   {
filterCard.map((prod) => <li key= {prod.id} >
<ClothData prodData={prod}/>
</li>)
   }
  
 </div>
  </div>
)
   
}
export default Body;