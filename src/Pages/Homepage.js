import '../App/App.css';

import itemsFromData from '../Data/items';
import GalleryCard from "../Components/GalleryCard/GalleryCard"
import FilterBar from '../Components/FilterBar/FilterBar';
import { useEffect, useState } from 'react';

function Homepage() {

  const [items, setItems] = useState([])
  const [defaultItems, setDefaultItems] = useState([])

  useEffect(() => {
    setItems(itemsFromData)
    let i = 0
    let types = ["bier", "fris", "cocktails"];
    const galleryCardsToBeRedererd = itemsFromData.map(collection => {
      let temp = <GalleryCard key={types[i]} type={types[i]} collection={collection} />
      i += 1
      return temp
    })
    setItems(galleryCardsToBeRedererd)
    setDefaultItems(galleryCardsToBeRedererd)
  }, [])

  const onFilter = (typeToBeFilterd) => {
    const copy = [...defaultItems]
       const cardsToBeRenderd = copy.filter(card => {
        if(card.props.type === (typeToBeFilterd)){
          return card
        }
       })
       setItems([cardsToBeRenderd])
  }

  return (
    <>
      <FilterBar onFilter={onFilter} />
      {items}
    </>
  );
}

export default Homepage;