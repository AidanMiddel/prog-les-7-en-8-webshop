import { useEffect, useState } from "react";
import "./FilterBar.css";

const FilterBar = (props) => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        let toBeRenderdLabels = [
            {
                name: "bier",
                checked: "unchecked"
            },
            {
                name: "fris",
                checked: "unchecked"
            },
            {
                name: "cocktails",
                checked: "unchecked"
            },
        ]

        setLabels(toBeRenderdLabels);
    }, [])

    const toBeRenderdLabels = labels.map(label => {
        let input = <input onChange={() => filterItem(label.name)} className="fliterBar__chackbox" type="checkbox" id={label.name} />
        if(label.checked === "checked"){
            input = <input checked={label.checked} onChange={() => filterItem(label.name)} className="fliterBar__chackbox" type="checkbox" id={label.name} />
        }
        return (
            <div key={label.name} className="filterbarInputWrapper">
                {input}
                <label htmlFor={label.name}>{label.name}</label>
            </div>
        )
    })

    const filterItem = (filter) => {
        const copy = [...labels]
        const newState = copy.map(label => {
            if(label.name !== filter){
                label.checked = "unchecked"
            }
            if(label.name === filter){
                label.checked = "checked"
            }
            return label
        })
        setLabels(newState)
        props.onFilter(filter)
    }

    return (
        <section className="filterBar">
            <div className="filterbarWrapper">
                {toBeRenderdLabels}
            </div>
        </section>
    )
}

export default FilterBar;