import "./FilterBar.css";

const FilterBar = () => {
    return (
        <section className="filterBar">
            <div className="filterbardWrapper">
                <div className="filterbardInputWrapper">
                    <input className="fliterBar__chackbox" type="checkbox" />
                    <label htmlFor="">Bier</label>
                </div>
                <div className="filterbardInputWrapper">
                    <input className="fliterBar__chackbox" type="checkbox" />
                    <label htmlFor="">Fris</label>
                </div>
                <div className="filterbardInputWrapper">
                    <input className="fliterBar__chackbox" type="checkbox" />
                    <label htmlFor="">Cocktail</label>
                </div>
            </div>
        </section>
    )
}

export default FilterBar;