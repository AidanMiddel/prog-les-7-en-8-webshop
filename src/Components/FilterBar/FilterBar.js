import "./FilterBar.css";

const FilterBar = (props) => {

    const filterBier = (event) => {
        props.onFilter()
    }
    
    return (
        <section className="filterBar">
            <div className="filterbarWrapper">
                <div className="filterbarInputWrapper">
                    <input onChange={filterBier} className="fliterBar__chackbox" type="checkbox" id="bier" />
                    <label htmlFor="bier">Bier</label>
                </div>
                <div className="filterbarInputWrapper">
                    <input className="fliterBar__chackbox" type="checkbox" id="fris"/>
                    <label htmlFor="fris">Fris</label>
                </div>
                <div className="filterbarInputWrapper">
                    <input className="fliterBar__chackbox" type="checkbox" id="cocktails"/>
                    <label htmlFor="cocktails">Cocktail</label>
                </div>
            </div>
        </section>
    )
}

export default FilterBar;