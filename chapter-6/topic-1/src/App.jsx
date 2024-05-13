import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import StudentDetail from "./pages/student/details";

import store from "./redux/store";

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
            <NonProtected>
                <Navbar />
                <Container className="mt-5">
                    <Login />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <Navbar />
                <Container className="mt-5">
                    <Register />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/students/:id",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <StudentDetail />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
                <RouterProvider router={router} />
                <ToastContainer theme="colored" />
            </GoogleOAuthProvider>
        </Provider>
    );
}

export default App;
