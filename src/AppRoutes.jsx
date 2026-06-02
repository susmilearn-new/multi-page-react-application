import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import UsersDetails from "./pages/UsersDetails"
import UsersListing from "./pages/UsersListing"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="users" element={<UsersListing />} />
                    <Route path="users/:id" element={<UsersDetails />} />
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes