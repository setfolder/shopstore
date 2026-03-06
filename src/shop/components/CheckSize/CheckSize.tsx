import './CheckSize.css'

export default function CheckSize(
        {id, size, checked, onChange}
         :{
            id :string,
            size :string | number,
            checked :boolean,
            onChange :() => void
        }
    ) {
    return (
        <label className={`checkSize ${checked ? 'selectedSize' :""}`} >
            <input
                type="checkbox"
                name={id}
                id={id}
                className="checkSizeInput"
                checked={checked}
                onChange={onChange}
            />
            <span>{size}</span>
        </label>
    )
}
