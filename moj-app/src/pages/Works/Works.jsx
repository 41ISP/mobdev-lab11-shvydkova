import { useEffect, useState } from "react"
import "./Works.css"
import { useNavigate } from "react-router-dom"

const Works = () => {
    const [bookName, setBookName] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        console.log(books)
    }, [books])
    const handleSearch = async () => {
        try {
            const res = await fetch(`https://anapioficeandfire.com/api/books`)
            const res2 = await res.json();         
        } catch (err) {
            console.error(err)
        }
    }
    const titles = res2.name;
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`books/${id}`)
    }
    return (
        <div className="container">
            <div className="header">
                <h1>Library</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for books..." value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
            </div>
            <h1>Книги</h1>
            {titles.map((title) => (
                <div onClick={() => handleClick(title.id)}>
                    <h4>{title.name}</h4>
                </div>
            ))}
        </div>
    )
}
export default Works