import { NavLink } from "react-router-dom"
import PostsPage from "./PostsPage"

function HomePage() {
    return (
        <main className="my-home-bg vh-100">
            <div className="container">
                <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                    <h1 className="text-center my-title pb-3">JUST COOK</h1>
                    <p className="text-center my-title pb-5">Your daily inspo for easy, tasty and healthy meals. <br />
                    Cooking has never been easier!</p>
                    <NavLink className="btn my-btn" to="/posts">Start cooking</NavLink>
                </div>
            </div>
        </main>
    )
}

export default HomePage