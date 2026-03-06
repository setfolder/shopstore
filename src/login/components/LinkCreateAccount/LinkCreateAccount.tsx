import "./LinkCreateAccount.css"

export default function LinkCreateAccount( {setLoginStatus} :{setLoginStatus :(value :string)=>void} ) {
    return (
        <div
            className="linkCreate"
            onClick={ ()=>setLoginStatus("create") }
            role="button"
        >
        create an account
        </div>
    )
}
