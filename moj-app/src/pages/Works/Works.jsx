import { useEffect, useState } from "react"
import "./Works.css"
import BookCard from "../../components/BookCard/BookCard"


const Works = () => {
    const [bookName, setBookName] = useState("")
    const [books, setBooks] = useState(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(books)
    }, [books])

    const handleSearch = async () => {
        try {
            setBooks(undefined)
            setError("")
            const trimmedMovieName = bookName.trim();
            if (trimmedMovieName.length <= 0) return

            const parameters = new URLSearchParams({
                q: bookName,
            })
            const res = await fetch(`https://openlibrary.org/search.json?${parameters.toString()}`, { mode: "cors" })
            const json = await res.json();
            if (json.Response === "False") throw new Error("Не найдена")
            setBooks(json.docs);
            if (!bookName) return setError(err.message)
        } catch (err) {
            setError(err.message)
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
                {error && <p>{error}</p>}
            </div>
            <h1>Books</h1>
            <div className="book-grid">{books && books.map((book) => <BookCard bookKey={book.key} {...book} />)}
            </div>

        </div>
    )
}
export default Works