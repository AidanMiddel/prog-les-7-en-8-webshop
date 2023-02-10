import './App.css';
import Homepage from '../Pages/Homepage';
import Productpage from "../Pages/Productpage"
import ShoppingcartCounter from '../Components/ShoppingcartCounter/ShoppingcartCounter';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const[collectionForProductpage, setCollectionForProductPage] = useState([])
  const [count, setCount] = useState(0);

  const onGalleryCardClicked = (collection) => {
    setCollectionForProductPage(collection)
  }
  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <ShoppingcartCounter count={count}/>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked} />}></Route>
        <Route path="/product/:type" element={<Productpage collection={collectionForProductpage} handleIncrement={handleIncrement}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
