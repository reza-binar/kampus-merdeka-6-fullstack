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
import Protected from "./components/Protected";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <Home />
                </Container>
            </Protected>
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
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </Protected>
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
