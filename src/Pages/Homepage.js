import '../App/App.css';

import itemsFromData from '../Data/items';
import GalleryCard from "../Components/GalleryCard/GalleryCard"
import FilterBar from '../Components/FilterBar/FilterBar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {

    const [items, setItems] = useState([])
    const [defaultItems, setDefaultItems] = useState([])

    const onGalleryCardClicked = (collection) => {
        props.onGalleryCardClicked(collection)
    }

    useEffect(() => {
        setItems(itemsFromData)
        let i = 0
        let types = ["bier", "fris", "cocktails"];
        const galleryCardsToBeRedererd = itemsFromData.map(collection => {
            let temp = (
                <Link type={types[i]} onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
                    <GalleryCard key={types[i]}  collection={collection} />
                </Link>
            )
            i += 1
            return temp
        })
        setItems(galleryCardsToBeRedererd)
        setDefaultItems(galleryCardsToBeRedererd)
    }, [])

    const onFilter = (typeToBeFilterd) => {
        const copy = [...defaultItems]
        const cardsToBeRenderd = copy.filter(card => {
            if (card.props.type === (typeToBeFilterd)) {
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