import React from "react"
import macbook from "../assits/macbook.jpeg"
import iphone from "../assits/iphone.jpeg"
import onepluse from "../assits/oneplus.jpeg";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const Home = () => {
    const img1 =
  macbook;
  const img2=iphone
  const img3=onepluse;
const productList =[
{
    name:"Ipone",
    price:80000,
    imgSrc:img2,
    id:"bdfkhvdbvkhasbvka",

},
{
    name:"macbook",
    price:128000,
    imgSrc:img1,
    id:"bfksbfkdbvkhasbvka",

},
{
    name:"OnePluse",
    price:35000,
    imgSrc:img3,
    id:"sfhgasva,",

}
];
const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Add ho gya bhai");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to cart
    </button>
  </div>
);

export default Home;
