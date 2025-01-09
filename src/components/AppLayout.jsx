import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";

function AppLayout() {
    return (
        <>
            <header>
                <AppNavBar />
            </header>

            <Outlet />

            <footer>Footer</footer>
        </>
    )
}

export default AppLayout