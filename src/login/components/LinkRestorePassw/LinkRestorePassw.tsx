import "./LinkRestorePassw.css"

export default function LinkRestorePassw( {setLoginStatus} :{setLoginStatus :(value :string)=>void} ) {
    return (
        <div
            className="linkRestore"
            onClick={ ()=>setLoginStatus("recovery") }
            role="button"
        >
        I forgot my password
        </div>
    )
}
