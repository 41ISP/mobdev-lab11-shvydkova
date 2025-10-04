import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Description = () => {
    const [book, setBook] = useState(undefined)
    const { key } = useParams()
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const res = await fetch(`https://openlibrary.org/works/${key}.json`, { mode: "cors" })
                const json = await res.json();
                if (json.Response === "False") throw new Error("Не найдена")
                setBook(json);
                console.log(json);
            } catch (err) {
                console.error(err)
            }
        }
        handleSearch();
    }, [])

    useEffect(() => { console.log(book,) }, [book])

    return (
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>
            {book && (<div className="book-desc">
                <div className="book-header">
                    <div className="info-section">
                        <h1 className="book-title">{book.title}</h1>
                        <div className="book-detail">
                            <span className="detail">{book.description.value}</span>
                            <span className="detail">Authors:</span>
                            <div className="book-subjects">
                                {book.subjects.map((subject) => (
                                    <span className="detail">{subject}</span>
                                ))}
                            </div>
                            <div className="book-subject_places">
                                {book.subject_places.map((subject) => (
                                    <span className="detail">{subject}</span>
                                ))}
                            </div>
                            {book.language && <div className="book-language">
                                {book.language.map((lg) => (
                                    <span className="detail">{lg}</span>
                                ))}
                            </div>
                            }
                        </div>

                    </div>
                </div>
            </div>)
            }
        </div>
    )
}
export default Description