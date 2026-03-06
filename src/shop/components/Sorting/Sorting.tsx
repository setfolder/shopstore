import "./Sorting.css"

export default function Sorting( {value, setSortBy} :{value :string, setSortBy :(v :string)=>void} ) {
    return (
        <div id="sorting">
            <span>Sort by:</span>
            <select
                name="sortby"
                id="sortby"
                className="sortby"
                value={value}
                onChange={ event=>setSortBy(event.target.value) } >
                <option value="r">Relevance</option>
                <option value="l">Price (Low to High)</option>
                <option value="h">Price (High to Low)</option>
            </select>
        </div>
    )
}
