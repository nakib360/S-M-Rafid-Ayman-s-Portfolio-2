import { createBrowserRouter } from "react-router";
import Main from "../Root/Main";

const rout = createBrowserRouter([
    {
        path: "/", 
        Component: Main
    }
])

export default rout;