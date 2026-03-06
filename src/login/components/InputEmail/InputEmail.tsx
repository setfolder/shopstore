import "./InputEmail.css"

export default function InputEmail(
        {setIsEmail, setEmail}
        :{
            setIsEmail :(value :boolean)=>void,
            setEmail :(value :string)=>void
        }
    ) {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/
    function onEmailChange(event :React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        let isEmailCorrect = emailRegex.test(value)
        setIsEmail(isEmailCorrect)
        isEmailCorrect ? setEmail(value) : setEmail("")
    }
    return (
        <input
            type="email"
            placeholder="Email"
            required
            className="emailInput"
            onChange={onEmailChange}
            aria-label="Email"
        />
    )
}
