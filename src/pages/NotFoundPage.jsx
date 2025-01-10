import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="container">
            <h1>Error 404: Page not Found!</h1>
            <div>
            <Link className="btn my-btn" to="/">Home</Link>
            <button onClick={() => navigate(-1)} className="btn my-btn-outline">Back</button>
            </div>
        </section>
    )
}

export default NotFoundPage