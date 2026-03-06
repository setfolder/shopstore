import {useState, useEffect, useContext} from 'react'
import SiteName from '@/shop/components/SiteName/SiteName'
import LoginMessage from '@/login/components/LoginMessage/LoginMessage'
import InputEmail from '@/login/components/InputEmail/InputEmail'
import InputPassword from '@/login/components/InputPassword/InputPassword'
import BtnSubmit from '@/login/components/BtnSubmit/BtnSubmit'
import LinkCreateAccount from '@/login/components/LinkCreateAccount/LinkCreateAccount'
import LinkRestorePassw from '@/login/components/LinkRestorePassw/LinkRestorePassw'
import LinkLogin from '@/login/components/LinkLogin/LinkLogin'
import Modal from '@/login/components/Modal/Modal'
import {LoginState} from '@/App'
import "./Login.css"

export default function Login() {
    const [ email, setEmail ] = useState("")
    const [ isEmail, setIsEmail ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ isPassword, setIsPassword ] = useState(false)
    const [ loginStatus, setLoginStatus ] = useState("login")  // login, incorrect, recovery, check, create
    const {setLoginWinOpened, setLoggedIn} = useContext(LoginState)!

    function fnClose() {
        return setLoginWinOpened(false)
    }

    // clean the password if loginStatus is "incorrect"
    useEffect( ()=>{
        if ( loginStatus === "incorrect" ) {
            setPassword("")
            setIsPassword(false)
        }
    }, [loginStatus] )

    function onSubmit(event :React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if( loginStatus === "login" && isEmail && isPassword) {
            // Send Email & Password for log in
            // ...
            // Swith to status loggedIn or incorrect
            console.log(email)
            setLoggedIn(true)
            fnClose()
        }
        else if( loginStatus === "recovery" && isEmail) {
            // Backend should send an email
            setLoginStatus("check")
        }
        else if( loginStatus === "check") {
            fnClose()
        }
    }

    const content = (
        <div className="loginContent">

            <SiteName type="small" />

            {
            loginStatus === "login" ?      <LoginMessage text="Sign in" type="message" /> :
            loginStatus === "incorrect" ? <LoginMessage text="Incorrect email/password. Try&nbsp;again." type="alert" /> :
            loginStatus === "recovery" ? <LoginMessage text="We will send the link for password recovery" type="info" /> :
            loginStatus === "check" ?     <LoginMessage text="Check your email" type="info" /> :
            loginStatus === "create" ?    <LoginMessage text="Create your account" type="info" /> :
            undefined
            }

            <form onSubmit={onSubmit}>
                { loginStatus !== "check" &&
                    <InputEmail setIsEmail={setIsEmail} setEmail={setEmail} />
                }
                { loginStatus !== "recovery" && loginStatus !== "check" &&
                    <InputPassword
                        setIsPassword={setIsPassword}
                        password={password}
                        setPassword={setPassword}
                        loginStatus={loginStatus}
                        setLoginStatus={setLoginStatus}
                    />
                }
                <BtnSubmit isEmail={isEmail} isPassword={isPassword} loginStatus={loginStatus} />
            </form>

            {
            loginStatus === "login" ?        <LinkCreateAccount setLoginStatus={setLoginStatus} /> :
            loginStatus === "incorrect" ?  <LinkRestorePassw setLoginStatus={setLoginStatus} /> :
            loginStatus === "create" ?     <LinkLogin setLoginStatus={setLoginStatus} /> :
            undefined
            }

        </div> /// loginContent
    )    /// content

    return <Modal content={content} />
}