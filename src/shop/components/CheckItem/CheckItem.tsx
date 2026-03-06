import './CheckItem.css'

export default function CheckItem(
        { id, content, checked, onChange }
        : {
            id :string,
            content :string,
            checked :boolean,
            onChange :() => void
        }
    ) {
    return (
        <label className="checkItem">
            <input
                type="checkbox"
                name={id}
                id={id}
                className="checkInput"
                checked={checked}
                onChange={onChange}
            />
            <span>{content}</span>
        </label>
    )
}
