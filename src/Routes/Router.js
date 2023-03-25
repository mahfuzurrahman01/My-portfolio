import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projectsDetails/:id',
                loader: async ({params}) => {
                    return params
                },
                element: <Details />
            }
        ]
    },

])