import { useNavigate} from "react-router-dom"
import "./BookCard.css"
const BookCard = (book) => {
    const navigate = useNavigate()
    
    const handleClick = () => {

        navigate(`books/${book.key}`)
    }
    return (
        <div onClick={handleClick} className="book-card">
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-meta">
                    <span className="book-year">{book.first_publish_year}</span>
                    <span className="book-year">{book.author_name[0]} ...</span>
                </div>
            </div>
        </div>
    )
}
export default BookCard
