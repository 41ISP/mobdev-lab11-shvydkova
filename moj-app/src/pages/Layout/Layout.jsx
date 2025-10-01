import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Главная</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Outlet />
                </main>
                <footer>Издательство 2025</footer>
            </div>
    )
}
export default Layout