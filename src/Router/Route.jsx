import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AddBook from "../page/AddBook/AddBook";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addBook',
                element: <AddBook></AddBook>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default routes;