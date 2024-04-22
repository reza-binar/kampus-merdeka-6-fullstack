import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling

import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Container className="mt-5">
                    <h1>Home</h1>
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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
