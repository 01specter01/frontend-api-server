import { Link } from "react-router-dom"

export default function({card}) {
    return (
        <div className="img-preview">
            <Link to ={"/cards/" + card.id}>
                <img src={card.url} />
            </Link>
        </div>
    )
} 