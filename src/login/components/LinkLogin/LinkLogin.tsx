import "./LinkLogin.css"

export default function LinkLogin( {setLoginStatus} :{setLoginStatus :(value :string)=>void} ) {
    return (
        <div
            className="linkLogin"
            onClick={ ()=>setLoginStatus("login") }
            role="button"
        >
        or log in
        </div>
    )  
}
