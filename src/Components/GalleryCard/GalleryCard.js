import "./GalleryCard.css"

import toBeRenderdFigures from "./Helpers/galleryCardHelper"

const GalleryCard = () => {
    return (
        <article className="galleryCard">
            {toBeRenderdFigures}
        </article>
    );
};

export default GalleryCard;