import { createBrowserRouter } from "react-router-dom";
import Works from "../pages/Works/Works";
import Description from "../pages/Descriptions/Descriptions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Works />
    },
    {
        path: "/books/:key",
        element: <Description />
    }
])
export default router