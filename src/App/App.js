import './App.css';

import items from '../Data/items';
import GalleryCard from "../Components/GalleryCard/GalleryCard"
import FilterBar from '../Components/FilterBar/FilterBar';

function App() {


  return (
    <>
      <FilterBar />
      <GalleryCard drinks={items.bier}/>
      <GalleryCard drinks={items.fris}/>
      <GalleryCard drinks={items.cocktails}/>
    </>
  );
}

export default App;
