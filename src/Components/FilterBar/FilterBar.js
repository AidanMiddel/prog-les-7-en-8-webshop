import { useEffect, useState } from "react";
import "./FilterBar.css";

const FilterBar = (props) => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        let toBeRenderdLabels = [
            {
                name: "bier",
                checked: false
            },
            {
                name: "fris",
                checked: false
            },
            {
                name: "cocktails",
                checked: false
            },
        ]

        setLabels(toBeRenderdLabels);
    }, [])

    const toBeRenderdLabels = labels.map(label => {
        <>
            <input onChange={() => filterBier("bier")} className="fliterBar__chackbox" type="checkbox" id="bier" />
            <label htmlFor="bier">Bier</label>
        </>
    })

    const filterBier = (filter) => {
        props.onFilter(filter)
    }

    return (
        <section className="filterBar">
            <div className="filterbarWrapper">
                <div className="filterbarInputWrapper">
                    <input onChange={() => filterBier("bier")} className="fliterBar__chackbox" type="checkbox" id="bier" />
                    <label htmlFor="bier">Bier</label>
                </div>
                <div className="filterbarInputWrapper">
                    <input onChange={() => filterBier("fris")} className="fliterBar__chackbox" type="checkbox" id="fris" />
                    <label htmlFor="fris">Fris</label>
                </div>
                <div className="filterbarInputWrapper">
                    <input onChange={() => filterBier("cocktails")} className="fliterBar__chackbox" type="checkbox" id="cocktails" />
                    <label htmlFor="cocktails">Cocktail</label>
                </div>
            </div>
        </section>
    )
}

export default FilterBar;