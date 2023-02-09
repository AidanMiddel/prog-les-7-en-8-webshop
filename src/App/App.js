import './App.css';

import itemsFromData from '../Data/items';
import GalleryCard from "../Components/GalleryCard/GalleryCard"
import FilterBar from '../Components/FilterBar/FilterBar';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(itemsFromData)
  }, [])

  const onFilter = () => {
    console.log("app wow")
  }

  const galleryCardsToBeRedererd = items.map(collection => {
    return <GalleryCard collection={collection} />
  })

  return (
    <>
      <FilterBar onFilter={onFilter} />
      {galleryCardsToBeRedererd}
    </>
  );
}

export default App;
