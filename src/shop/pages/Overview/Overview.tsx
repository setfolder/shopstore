import InfoBlock from '@/shop/components/InfoBlock/InfoBlock'
import Conditions from '@/shop/components/Conditions/Conditions'
import BtnPlaceOrder from '@/shop/components/BtnPlaceOrder/BtnPlaceOrder'
import useFetch from "@/hooks/useFetch"
import './Overview.css'

type UserData = {
    name :string
    address :string
    payCardN :string
}

export default function Overview() {
    const { data: userData, loadingStatus } = useFetch<UserData>("/api/userdata")
    return (
        <>
        {loadingStatus === "loading" && <div>Loading user data...</div>}
        {loadingStatus === "error" && <div>Error when user data loading</div>}
        {loadingStatus === "empty" && <div>Error: No user data</div>}
        {loadingStatus === "success" &&
            <main className="overviewMain">
                <div className="overviewInfo">
                    <h2>Delivering</h2>
                    <InfoBlock  header="Recipient"  info={userData?.name ?? ""} info2={userData?.address} />
                    <InfoBlock  header="Paying with"  info={`....${userData?.payCardN?.slice(-4)}`} info2={undefined} />
                    <InfoBlock  header="Arriving"  info="in 4 days" info2={undefined} />
                    <Conditions />
                    <div className="btnSpace"><BtnPlaceOrder /></div>
                </div>
            </main>
        }
    </>
    )
}
