import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import MyAsset from "../Layout/Pages/EmployeePages/MyAsset/MyAsset";
import MyTeam from "../Layout/Pages/EmployeePages/MyTeam/MyTeam";
import RequestAsset from "../Layout/Pages/EmployeePages/RequestAsset/RequestAsset";
import Assets from "../Layout/Pages/HrPages/Assets/Assets";
import AddAsset from "../Layout/Pages/HrPages/AddAsset/AddAsset";
import AllRequests from "../Layout/Pages/HrPages/AllRequests/AllRequests";
import MyEmployees from "../Layout/Pages/HrPages/MyEmployees/MyEmployees";
import AddEmployee from "../Layout/Pages/HrPages/AddEmployee/AddEmployee";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            //employee pages
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
            },
            //HR manager pages
            {
                path: 'assets',
                element: <Assets></Assets>
            },
            {
                path: 'add-asset',
                element: <AddAsset></AddAsset>
            },
            {
                path: '/all-requests',
                element: <AllRequests></AllRequests>
            }, 
            {
                path: 'employee-lists',
                element: <MyEmployees></MyEmployees>
            },
            {
                path: '/add-employee',
                element: <AddEmployee></AddEmployee>
            }
        ]
    },
]);