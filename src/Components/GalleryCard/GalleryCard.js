import "./GalleryCard.css"

const GalleryCard = () => {
    return (
        <article className="galleryCard">
            <figure className="galleryCard__figure galleryCard__figure--big"></figure>
            <figure className="galleryCard__figure galleryCard__figure--middle"></figure>
            <figure className="galleryCard__figure galleryCard__figure--middle"></figure>
            <figure className="galleryCard__figure galleryCard__figure--small"></figure>
            <figure className="galleryCard__figure galleryCard__figure--small"></figure>
            <figure className="galleryCard__figure galleryCard__figure--small"></figure>
            <figure className="galleryCard__figure galleryCard__figure--small"></figure>
        </article>
    );
};

export default GalleryCard;