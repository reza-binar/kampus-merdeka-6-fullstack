import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import store from "./redux/store";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        // We will use the store (temporary database)
        <Provider store={store}>
            <div className="container">
                <RouterProvider router={router} />
            </div>

            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
