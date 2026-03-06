import './Pager.css'

export default function Pager(
        { currentPage = 1, pagesCounted = 1, onPrev, onNext }
        :{
            currentPage? :number,
            pagesCounted? :number,
            onPrev :() => void,
            onNext :() => void
        }
    ) {
    const isFirst = currentPage <= 1
    const isLast = currentPage >= pagesCounted

    return (
        <div className="pager">
            <div className="prePage" onClick={isFirst ? undefined : onPrev} role="button" aria-disabled={isFirst} aria-label="Previous page">
                <img src="pic/left.png" alt="-" aria-hidden="true" /><span>Previous</span>
            </div>

                <div className="pageN pageNSelected">
                    {currentPage} / {pagesCounted}
                </div>

            <div className="nextPage" onClick={isLast ? undefined : onNext} role="button" aria-disabled={isLast} aria-label="Next page">
                <span>Next</span><img src="pic/right.png" alt="+" aria-hidden="true" />
            </div>
        </div>
    )
}
