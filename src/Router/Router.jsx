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
import Packages from "../Layout/Pages/HrPages/Packages/Packages";
import SharedProfile from "../Layout/Pages/Shared/Profile/SharedProfile";
import JoinAsEmployee from "../Layout/Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHr from "../Layout/Pages/JoinAsHr/JoinAsHr";
import Login from "../Layout/Pages/Login/Login";
import Payments from "../Layout/Pages/HrPages/Payments/Payments";
import EmployeRoute from "../PrivateRoutes/EmployeRoute";
import PrintAsset from "../Layout/Pages/EmployeePages/MyAsset/PrintAsset";

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
                path: '/employee-register',
                element: <JoinAsEmployee></JoinAsEmployee>
            },
            {
                path: '/hr-register',
                element: <JoinAsHr></JoinAsHr>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            //employee pages
            {
                path: '/my-assets',
                element: <EmployeRoute><MyAsset></MyAsset></EmployeRoute>
            },
            {
                path: '/my-team',
                element: <EmployeRoute><MyTeam></MyTeam></EmployeRoute>
            },
            {
                path: '/request-asset',
                element: <EmployeRoute><RequestAsset></RequestAsset></EmployeRoute>
            },
            {
                path: '/employee-profile',
                element: <EmployeRoute><SharedProfile></SharedProfile></EmployeRoute>
            },
            {
                path: '/print-assetDetails',
                element: <EmployeRoute><PrintAsset></PrintAsset></EmployeRoute>
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
            },
            {
                path: '/packages',
                element: <Packages></Packages>
            },
            {
                path: '/hr-profile',
                element: <SharedProfile></SharedProfile>
            },
            {
                path: '/payments',
                element: <Payments></Payments>
            }
        ]
    },
]);