import './CheckColor.css'

export default function CheckColor(
        {id, colorCode, checked, onChange}
         :{
            id :string | number,
            colorCode :string,
            checked :boolean,
            onChange :() => void
        }
    ) {
    return (
        <label
            className={`checkColor ${checked ? 'selectedColor' :""}`}
            style={{"backgroundColor" :"#"+colorCode}}
        >
            <input
                type="checkbox"
                name={String(id)}
                id={String(id)}
                className="checkColorInput"
                checked={checked}
                onChange={onChange}
            />
        </label>
    )
}
