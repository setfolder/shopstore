import Nail from '@/shop/components/Nail/Nail'
import './Thumbnails.css'

export default function Thumbnails(
        {sources, nowPhoto, func}
        :{
            sources :string[],
            nowPhoto :string | null,
            func :(src :string) => void
        }
    ) {
    return (
        <div className="nails">
            { sources.map( src => (
                <Nail  key={src}  src={src}  isActive={src === nowPhoto}  func={func} />
            ))}
        </div>
    )
}
