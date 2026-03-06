import BtnGotoCatalog from '@/shop/components/BtnGotoCatalog/BtnGotoCatalog'
import PayResAnswer from '@/shop/components/PayResAnswer/PayResAnswer'
import useFromCartToDelivery from '@/hooks/useFromCartToDelivery'
import './PayResult.css'

export default function PayResult({errorType=""}) {
    useFromCartToDelivery(!errorType)
    return (
        <main className="payResMain">
            <div className="payResInfo">
                <PayResAnswer  errorType={errorType} />    {/* types from server/siteData/paymentErrorTypes */}
                <div className="btnFolder"><BtnGotoCatalog /></div>
            </div>
        </main>
    )
}
