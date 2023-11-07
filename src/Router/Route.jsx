import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AddBook from "../page/AddBook/AddBook";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllBook from "../page/AllBook/AllBook";
import CategoriesBooks from "../page/CategoriesBooks/CategoriesBooks";
import BookDetails from "../page/BookDetails/BookDetails";



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
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: 'allBook',
                element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/api/v1/newBook')
            },
            {
                path: 'relevantBooks/:category',
                element: <CategoriesBooks></CategoriesBooks>,
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/newBook/${params.category}`) 

            },
            {
                path: 'details/:id', 
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/details/${params.id}`)
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