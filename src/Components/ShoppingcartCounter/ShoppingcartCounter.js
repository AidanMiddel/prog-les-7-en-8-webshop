import "./ShoppingcartCounter.css"

const ShoppingcartCounter = (props) => {
    return (
        <>
            <h1 className="ShoppingcartCounter">
                <i class="fa-solid fa-cart-shopping"></i>
                {props.count}
            </h1>
        </>
    )
}
export default ShoppingcartCounter;