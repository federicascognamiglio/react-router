import { NavLink } from "react-router-dom";

function AppNavBar() {
    const pages = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/posts",
            name: "Recipes"
        },
        {
            path: "/about",
            name: "About Us"
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <h3>JUST COOK</h3>
                <ul className="navbar-nav">
                    {pages.map((curPage) => <li className="nav-item" key={curPage.name}>
                        <NavLink to={curPage.path} className="nav-link">{curPage.name}</NavLink>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
}

export default AppNavBar