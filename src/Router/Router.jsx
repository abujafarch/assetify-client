import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import MyAsset from "../Layout/Pages/EmployeePages/MyAsset/MyAsset";
import MyTeam from "../Layout/Pages/EmployeePages/MyTeam/MyTeam";
import RequestAsset from "../Layout/Pages/EmployeePages/RequestAsset/RequestAsset";

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
            },
            {
                path: '/my-team',
                element: <MyTeam></MyTeam>
            },
            {
                path: '/request-asset',
                element: <RequestAsset></RequestAsset>
            }
        ]
    },
]);