import './App.css';
import Homepage from '../Pages/Homepage';
import Productpage from "../Pages/Productpage"
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const[collectionForProductpage, setCollectionForProductPage] = useState([])
  const onGalleryCardClicked = (collection) => {
    setCollectionForProductPage(collection)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked} />}></Route>
        <Route path="/product/:type" element={<Productpage collection={collectionForProductpage} />}></Route>
      </Routes>
    </>
  );
}

export default App;
