import "./InputPassword.css"

export default function InputPassword(
        { setIsPassword, password, setPassword, loginStatus, setLoginStatus }
        :{
            setIsPassword :(value :boolean) => void
            password :string
            setPassword :(value :string) => void
            loginStatus :string
            setLoginStatus :(value :string) => void
        }
    ) {

    function onPasswChange(event :React.ChangeEvent<HTMLInputElement>) {
        // if loginStatus is "incorrect" - when typing again - go to loginStatus "login"
        loginStatus === "incorrect" && setLoginStatus("login")

        const value = event.target.value
        // to clean the field from it's container
        setPassword(value)
        // to inform it's container if the field is empty
        setIsPassword(value.length > 0)
    }

    return (
        <input
            type="password"
            placeholder="Password"
            required
            className="passwInput"
            value={password}
            onChange={onPasswChange}
            aria-label="Password"
        />
    )
}
