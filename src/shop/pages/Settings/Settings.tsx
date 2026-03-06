import useFetch from "@/hooks/useFetch"
import SettingsArticle  from '@/shop/components/SettingsArticle/SettingsArticle'
import './Settings.css'

interface UserData {
    name :string
    email :string
    address :string
    phone :string
    payCardName :string
    payCardN :string
    payCardMonth :string | number
    payCardYear :string | number
    payCardPin :string | number
}

export default function Settings() {
    const { data: userData, loadingStatus: loadingStatus } = useFetch<UserData>("/api/userdata")
    return (
    <>
        {loadingStatus === "loading" && <div>Loading user data...</div>}
        {loadingStatus === "error" && <div>Error when user data loading</div>}
        {loadingStatus === "empty" && <div>Error: No user data</div>}
        {loadingStatus === "success" && userData &&
            <main className="settingsMain">
                <h1>Settings</h1>
                <div className="settingsInfo">
                    <SettingsArticle header="Name" data={userData.name} grid={false} subheader={[]} />
                    <SettingsArticle header="Email" data={userData.email} grid={false} subheader={[]} />
                    <SettingsArticle header="Address" data={userData.address} grid={false} subheader={[]} />
                    <SettingsArticle header="Phone" data={userData.phone} grid={false} subheader={[]} />
                    <SettingsArticle
                        grid={true}
                        header="Pay Card"
                        subheader={[ "Name", "Card number", "Month", "Year", "Pin" ]}
                        data={[ userData.payCardName, userData.payCardN, userData.payCardMonth, userData.payCardYear, userData.payCardPin ]}
                    />
                </div>
            </main>
        }
    </>
    )
}
