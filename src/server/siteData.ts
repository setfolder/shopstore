const siteData = {
    newOrderNumber: "234212310",
    lastUsedGoodsID: "25",
    paymentErrorTypes: {
        "cardExpired": {
            title: "Payment error",
            note: "Your credit card is expired.\nPlease check your settings"
        },
        "authError": {
            title: "Payment authorization failed",
            note: "Please verify your card details or try a different card"
        },
        "networkError": {
            title: "Network Error",
            note: "Unable to connect to the server.\nCheck your internet connection and try again."
        },
        "unknownError": {
            title: "Unknown Payment Error",
            note: "Try again, please.\nIf the error persists, please contact support."
        }
    }
}
export default siteData