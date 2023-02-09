import items from "../../../Data/items";

let iterator = 1;
let classToBeAdded = ""
let toBeRenderdFigures = items.fris.map(bier => {
    switch (iterator) {
        case 1:
            classToBeAdded = "galleryCard__figure galleryCard__figure--big";
            break;
        case 2:
            classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
            break;
        case 3:
            classToBeAdded = "galleryCard__figure galleryCard__figure--middle";
            break;
        default:
            classToBeAdded = "galleryCard__figure galleryCard__figure--small";
            break;
    }
    iterator +=1

    return (
        <figure className={classToBeAdded}>
            <img className="galleryCard__img" src={bier.img} alt={bier.alt} />
        </figure>
    )
})

export default toBeRenderdFigures