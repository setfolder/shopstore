import './SizeSelector.css'

export default function SizeSelector(
        {sizes, value, onChange}
        :{
            sizes :(string | number)[],
            value :string | number,
            onChange :(v :string) => void
        }
    ) {
    return (
        <div className='sizeSelector'>
            <div className='sz'>Size:</div>
            <select
                name="posSize"
                id="posSize"
                value={value}
                onChange={ event=>onChange(event.target.value) }
            >
                { sizes.map( num=>(
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
        </div>
    )
}