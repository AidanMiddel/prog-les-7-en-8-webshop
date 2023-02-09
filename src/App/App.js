import './App.css';

import items from '../Data/items';
import GalleryCard from "../Components/GalleryCard/GalleryCard"

function App() {


  return (
    <>
      <GalleryCard drinks={items.bier}/>
      <GalleryCard drinks={items.fris}/>
      <GalleryCard drinks={items.cocktails}/>
    </>
  );
}

export default App;
