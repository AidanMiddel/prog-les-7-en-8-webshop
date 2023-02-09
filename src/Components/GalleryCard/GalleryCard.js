import "./GalleryCard.css"

import items from "../../Data/items";

const GalleryCard = () => {
    let iterator = 1;
    let classToBeAdded = ""
    let toBeRenderdFigures = items.bier.map(bier => {
        if (iterator === 1){
            classToBeAdded = "galleryCard__figure galleryCard__figure--big";
            iterator +=1;
        }
        else if (iterator === 2 || iterator === 3){
            classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
            iterator +=1;
        }
        else{
            classToBeAdded = "galleryCard__figure galleryCard__figure--small";
        }
        return (
            <figure className={classToBeAdded}>
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