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
import Read from "../page/Read/Read";
import UpdateBook from "../page/UpdateBook/UpdateBook";



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
                loader: () => fetch('https://edu-link-library-server.vercel.app/api/v1/newBook')
            },
            {
                path: 'relevantBooks/:category',
                element: <CategoriesBooks></CategoriesBooks>,
                loader: ({params}) => fetch(`https://edu-link-library-server.vercel.app/api/v1/newBook/${params.category}`) 

            },
            {
                path: 'details/:id', 
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://edu-link-library-server.vercel.app/api/v1/details/${params.id}`)
            },
            {
                path: 'read/:id',
                element: <PrivateRoute><Read></Read></PrivateRoute>,
                loader: ({params}) => fetch(`https://edu-link-library-server.vercel.app/api/v1/describe/${params.id}`)
            },
            {
                path: 'updateBook/:id',
                element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({params}) => fetch(`https://edu-link-library-server.vercel.app/api/v1/update/${params.id}`)
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