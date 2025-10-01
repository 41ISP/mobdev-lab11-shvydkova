import { useEffect, useState } from "react"
import "./Works.css"


const Works = () => {
    const [bookName, setBookName] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        console.log(books)
    }, [books])

    const handleSearch = async () => {
        try {
            const res = await fetch(`https://gutendex.com/books/`)
            const json = await res.json();  
            setBooks(json);      
        } catch (err) {
            console.error(err)
        }
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
        </div>
    )
}
export default Works