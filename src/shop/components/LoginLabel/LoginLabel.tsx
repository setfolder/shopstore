import {useContext} from 'react'
import {LoginState} from '@/App'
import UserMenu from '@/login/components/UserMenu/UserMenu'
import useFetch from "@/hooks/useFetch"
import './LoginLabel.css'

export default function LoginLabel() {

    const { data: userData, loadingStatus: loadingStatus } = useFetch<{name?: string, email?: string}>("/api/userdata")
    const {setLoginWinOpened, loggedIn, userMenuOpened, setUserMenuOpened} = useContext(LoginState)!

    let user = ""
    if (userData) {
        user = userData.name ? userData.name : userData.email || ""
    }

    loadingStatus === "error" && console.log("Error when user data loading")
    loadingStatus === "empty" && console.log("Error: No user data")

    return (
        <div id="login">
            {userMenuOpened ? <UserMenu /> : null}
            <div
                className="loginLook"
                onClick={loggedIn ? () => setUserMenuOpened(!userMenuOpened) : () => setLoginWinOpened(true)}
                role="button"
                aria-haspopup={loggedIn ? "menu" : "dialog"}
                aria-expanded={loggedIn ? userMenuOpened : undefined}
                aria-label={loggedIn ? "Open user menu" : "Open login dialog"}
            >
                <img
                    className="loginPic"
                    src={loggedIn ? "/pic/user-active.png" : "/pic/user.png"}
                    alt="•"
                    aria-hidden="true"
                />
                <div className="loginInfo">
                    { !loggedIn ?
                        <span>Log in</span> :
                        loadingStatus === "success" ? <span>{user}</span> : <span></span>
                    }
                </div>
            </div>
        </div>
    )

}
