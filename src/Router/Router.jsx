import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import MyAsset from "../Layout/Pages/EmployeePages/MyAsset/MyAsset";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/my-assets',
                element: <MyAsset></MyAsset>
            }
        ]
    },
]);