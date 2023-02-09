import "./GalleryCard.css"

import items from "../../Data/items";

const GalleryCard = () => {

    let toBeRenderdFigures = items.bier.map(bier => {
        return (
            <figure className="galleryCard__figure galleryCard__figure--big">
                <img className="galleryCard__img" src={bier.img} alt={bier.alt} />
            </figure>
        )
    })
    return (
        <article className="galleryCard">
            {toBeRenderdFigures}
        </article>
    );
};

export default GalleryCard;