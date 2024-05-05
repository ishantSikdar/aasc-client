import { useParams } from "react-router-dom"

export default function EventDetails() {
    const { id } = useParams();
    
    return (
        <div className="mt-32 text-4xl font-bold">{id}</div>
    )
}