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
        let input = <input unchecked onChange={() => filterItem(label.name)} className="fliterBar__chackbox" type="checkbox" id={label.name} />
        if(label.checked){
            input = <input checked onChange={() => filterItem(label.name)} className="fliterBar__chackbox" type="checkbox" id={label.name} />
        }
        return (
            <div className="filterbarInputWrapper">
                {input}
                <label htmlFor={label.name}>{label.name}</label>
            </div>
        )
    })

    const filterItem = (filter) => {
        const copy = [...labels]
        const newState = copy.map(label => {
            if(label.name !== filter){
                label.checked = false
            }
            if(label.name === filter){
                label.checked = true
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