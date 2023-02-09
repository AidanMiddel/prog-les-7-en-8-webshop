import "./GalleryCard.css"

import bier1 from "../../Img/bier/1.jpg"
import bier2 from "../../Img/bier/2.jpg"
import bier3 from "../../Img/bier/3.jpg"
import bier4 from "../../Img/bier/4.jpg"
import bier5 from "../../Img/bier/5.jpg"
import bier6 from "../../Img/bier/6.jpg"
import bier7 from "../../Img/bier/7.jpg"

const GalleryCard = () => {
    return (
        <article className="galleryCard">
            <figure className="galleryCard__figure galleryCard__figure--big">
                <img className="galleryCard__img" src={bier1} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--middle">
                <img className="galleryCard__img" src={bier2} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--middle">
                <img className="galleryCard__img" src={bier3} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--small">
                <img className="galleryCard__img" src={bier4} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--small">
                <img className="galleryCard__img" src={bier5} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--small">
                <img className="galleryCard__img" src={bier6} alt="" />
            </figure>
            <figure className="galleryCard__figure galleryCard__figure--small">
                <img className="galleryCard__img" src={bier7} alt="" />
            </figure>
        </article>
    );
};

export default GalleryCard;