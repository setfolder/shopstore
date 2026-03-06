import "./BtnSubmit.css"

export default function BtnSubmit(
        {isEmail, isPassword, loginStatus}
        :{isEmail :boolean, isPassword :boolean, loginStatus :string}
    ) {
    const submitActive = loginStatus==="check" || (isEmail && isPassword)
    return (
        <input
            type="submit"
            name="btnSubmit"
            value="Continue"
            disabled={!submitActive}
            className={`btnSubmit ${submitActive ? "btnYes" : ""}`}
        />
    )
}
