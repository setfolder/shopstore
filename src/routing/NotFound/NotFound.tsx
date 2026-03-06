import {Link} from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <main className="notFound">
            <h2>Page not found</h2>
            <Link  to="/"  className="backLink">Go to the main page</Link>
        </main>
    )
}