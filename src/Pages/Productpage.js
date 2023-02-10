import itemsObject from "../Data/items"
import "./Productpage.css";

const Productpage = () => {
    const toBeRenderd = itemsObject[0].map(item => {
        return (
            <li key={item.name} className="productpage__listitem">
                <img src={item.img} alt={item.alt} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button>add to card</button>
            </li>
        )
    })
    return (
        <article className="productpage">
            <ul className="productpage__list">
                {toBeRenderd}
            </ul>
        </article>
    )
}

export default Productpage