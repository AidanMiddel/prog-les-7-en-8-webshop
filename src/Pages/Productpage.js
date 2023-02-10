import itemsObject from "../Data/items"

const Productpage = () => {
    const toBeRenderd = itemsObject[0].map(item => {
        return (
            <h1>{item.name}</h1>
        )
    })
    return (
        <>
            {toBeRenderd}
        </>
    )
}

export default Productpage