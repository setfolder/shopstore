import useFetch from "@/hooks/useFetch"
import './PayResAnswer.css'

export default function PayResAnswer( {errorType} :{errorType? :string} ) {

    const { data: siteData, loadingStatus: loadingStatus } = useFetch<any>("/api/sitedata")

    if (!errorType) {
        return (
            <div>
                <div className="payResLine bold">Thank you for the order!</div>
                { loadingStatus === "loading" &&  <div className="payResLine">Loading order info...</div> }
                { loadingStatus === "error" &&  <div className="payResLine error">Something went wrong.</div> }
                { loadingStatus === "empty" &&  <div className="payResLine">Error: No order number</div> }
                { loadingStatus === "success" &&
                    <div className="payResLine">Order {siteData?.newOrderNumber} is on it's way</div> }
            </div>
        )
    }

    // if gotten an errorType
    loadingStatus === "loading" &&  <div className="payResLine">Loading info...</div>
    loadingStatus === "error" &&  <div className="payResLine error">Something went wrong.</div>
    loadingStatus === "empty" &&  <div className="payResLine">Error: No error data</div>
    if(loadingStatus === "success") {
        const errorTypes = siteData?.paymentErrorTypes
        const selected =  errorTypes?.[errorType] ?? errorTypes?.unknownError
        return (
            <div>
                <div className="payResLine bold redText">{selected.title}</div>
                <div className="payResLine">{selected.note}</div>
            </div>
        )
    }

}
