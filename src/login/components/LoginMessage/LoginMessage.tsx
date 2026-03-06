import "./LoginMessage.css"

export default function LoginMessage({text, type} :{text :string, type :string}) {
    return (
        <div className={`loginMessage ${type}`}>{text}</div>
    )
}
