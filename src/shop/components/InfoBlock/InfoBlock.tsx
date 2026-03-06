import './InfoBlock.css'

export default function InfoBlock( {header, info, info2} :{header :string, info :string, info2? :string} ) {
    return (
        <div className="infoBlock">
            <h3>{header}</h3>
            <div>{info}</div>
            {info2 ? <div>{info2}</div> : ""}
        </div>
    )
}