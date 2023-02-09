import "./GalleryCard.css"

import getToBeRenderdFigure from "./Helpers/galleryCardHelper"

const GalleryCard = (props) => {
    return (
        <article className="galleryCard">
            {getToBeRenderdFigure(props.collection)}
        </article>
    );
};

export default GalleryCard;