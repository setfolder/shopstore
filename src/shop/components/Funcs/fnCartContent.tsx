export default function fnCartContent(
    {cart, goodsData, CartProductCard, noDelBtn}
     :{
        cart :[string, string, number][],
        goodsData :any[] | undefined,
        CartProductCard :any,
        noDelBtn? :boolean
    }
) {
if(!goodsData || cart.length === 0) {
    return {
        content: [],
        totalAmount: 0,
        totalSum: 0
    }
}

const reduced = cart.reduce(
    (acc, [cartID, pSize, pAmount]) => {
        const dataset = goodsData.find( dataset => (dataset.id).toString() === cartID.split("-")[0] )
        if(!dataset) return acc

        const pos = {...dataset, pSize, pAmount}

        acc.totalAmount += pos.pAmount
        acc.totalSum += pos.posSum
        acc.content.push(
            <CartProductCard
                key={pos.id+"-"+pos.pSize}
                pID={pos.id}
                pPic={ pos.nails[0] }
                pName={pos.posName}
                pSize={pos.pSize}
                pColor={pos.posColor}
                pSum={pos.posSum.toFixed(2)}
                pAmount={pos.pAmount}
                noDelBtn={noDelBtn ? true : false}
            />
        )
        return acc
    },
    {
        content: [] as any[],
        totalAmount: 0,
        totalSum: 0
    }
)

return reduced
}