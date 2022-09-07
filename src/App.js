import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import React,{useState} from 'react';                                                                                   

function App() {
  const products=[
    {
      name:"Iphone 10",
      price:399999,
      quantity:0

    },
    {
      name:"Redmi 10",
      price:40000,
      quantity:0

    },
    {
      name:"Samsung Galaxy",
      price:30001,
      quantity:0

    },
    {
      name:"Sony 4Z",
      price:300000,
      quantity:0

    },
    {
      name:"Gold Fold B4",
      price:10000,
      quantity:0

    }

  ]
  let [productList,setProductList]=useState(products)
  let [TotalAmount,setTotalAmount]=useState(0)

 const incrementQuantity=(index)=>{
    let newList=[...productList];
    let newTotalAmount=TotalAmount;
    newList[index].quantity++;
    newTotalAmount=newTotalAmount+newList[index].price;
    setProductList(newList);
    setTotalAmount(newTotalAmount);

  };

 const decrementQuantity=(index)=>{
    let newTotalAmount=TotalAmount;
    let newList=[...productList];
    if(newList[index].quantity>0 ){
      newList[index].quantity--;
      newTotalAmount-=newList[index].price;

    }
    
    setProductList(newList);
    setTotalAmount(newTotalAmount);

 };

 const Reset=()=>{
  let newList=[...productList];
  newList.map((products)=>{
    products.quantity=0;
  })

  setTotalAmount(0);
  setProductList(newList);


 };
  return (
    <>
    <Navbar/>
    <main className='container mt-5 me-5'>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    </main>
    <Footer TotalAmount={TotalAmount} Reset={Reset}/>
    </>
  );
}

export default App;
