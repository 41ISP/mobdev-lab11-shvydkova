import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Authors.css"
const Authors = () => {
    const { key } = useParams()
    const navigate = useNavigate()
    const [author, setAuthor] = useState()
    const [works, setWorks] = useState(undefined)

    useEffect(() => {
        setAuthor(null)
        setWorks([])
    }, [key])

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const authorRes = await fetch(`https://openlibrary.org/authors/${key}.json`)
                const authorJson = await authorRes.json()
                setAuthor(authorJson)
                console.log(authorRes)

                // const worksRes = await fetch(`https://openlibrary.org/authors/${key}/works.json`)
                // const worksJson = await worksRes.json()
                // console.log(worksRes)
                // setWorks(worksJson)
            }
            catch (err) {
                console.error(err)
            }
        }
        handleSearch();
    }, [])

    const handleClick = (workKey) => {
        const bookKey = workKey.replace('/works/', '')
        navigate(`/books/${bookKey}`)
    }


    return (
        <div className="container">
            <Link to="/" className="back-button">← Back </Link>
            <div className="author-details">
                <div className="author-header">
                    <div className="author-main-info">
                        <div className="author-photo">
                             <img
                                src={`https://covers.openlibrary.org/a/olid/${key}-L.jpg`}
                                className="author-image" />  
                        </div>
                    </div>
                    <div className="author-text-info">
                        <h1 className="author-name"></h1>
                        <div className="author-dates">
                            <span>
                               
                            </span>
                        </div>
                    </div>
                    <div className="author-content">
                        <div className="author-bio">
                            
                            <div className="info-section">
                                <h3>Bio</h3>
                                <div className="description"></div>
                            </div>

                        </div>
                        <div className="info-section">
                            <h3>Works: </h3>
                            <div className="works-list">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authors