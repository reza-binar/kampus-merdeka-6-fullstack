import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Container className="mt-5">
                    <Home />
                </Container>
            </>
        ),
    },
    {
        path: "/login",
        element: (
            <>
                <Navbar />
                <Container className="mt-5">
                    <Login />
                </Container>
            </>
        ),
    },
    {
        path: "/register",
        element: (
            <>
                <Navbar />
                <Container className="mt-5">
                    <Register />
                </Container>
            </>
        ),
    },
    {
        path: "/profile",
        element: (
            <>
                <Navbar />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </>
        ),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />

            <ToastContainer theme="colored" />
        </>
    );
}

export default App;
