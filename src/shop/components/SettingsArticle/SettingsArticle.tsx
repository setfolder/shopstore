import './SettingsArticle.css'

export default function SettingsArticle(
        {grid, header, subheader, data}
        :{
            grid? :boolean,
            header :string,
            subheader? :string[],
            data :any
        }
    ) {
    return (
        <article className='settingsArticle'>
            <h3>{header}</h3>
            { !grid ?
                <div className="settingsValue">{data}</div>
                :
                <div className="settingsGrid">
                    <span>{subheader?.[0]}:</span><span className="settingsValue">{data[0]}</span>
                    <span>{subheader?.[1]}:</span><span className="settingsValue">{data[1]}</span>
                    <span>{subheader?.[2]}:</span><span className="settingsValue">{data[2]}</span>
                    <span>{subheader?.[3]}:</span><span className="settingsValue">{data[3]}</span>
                    <span>{subheader?.[4]}:</span><span className="settingsValue">{data[4]}</span>
                </div>
            }
        </article>
    )
}