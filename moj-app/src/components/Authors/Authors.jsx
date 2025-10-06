import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const Authors = () => {
    const { key } = useParams()
    const navigate = useNavigate()
    const [author, setAuthor] = useState()
    const [works, setWorks] = useState(undefined)

    useEffect(() => {
        const handleSearch = async () => {
            const authorRes = await fetch(`https://openlibrary.org/authors/${key}json`, { mode: "cors" })
            const authorJson = await authorRes.json()
            setAuthor(authorJson)

            const worksRes = await fetch(`https://openlibrary.org/authors/${key}/works.json`, { mode: "cors" })
            const worksJson = await worksRes.json()
            setWorks(worksJson.entries)


        }
        handleSearch();
    })

    const handleClick = () => {
        navigate(`books/${book.bookKey.split("/")[2]}`)
    }

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>
            <div className="header">
                <div className="author-details">
                    <div className="author-name"></div>
                    <div className="author-dates"></div>
                </div>
                <div className="author-content">
                    <div className="author-bio">
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Authors