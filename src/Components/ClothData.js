import { IMg_url } from "./Constants";

const ClothData = (props) => {
   const { prodData } = props;
   const {
   imageUrl,
   name,
   brandName,
   colour,
   price
   } = prodData;
    return (
        <div>

      <div className="card" style={{width: "18rem"}} >
  <img src={imageUrl} className="card-img-top" alt="product image"/>
  <div className="card-body">
    <h4 >{brandName}</h4>
    <h5>{name}</h5>
    <h5>{colour}</h5>
    <h5>{price?.current?.text}</h5>
    
    <a href="#" className="btn btn-primary">Add</a>
  </div>
  </div>
        </div>
    )
}

export default ClothData;