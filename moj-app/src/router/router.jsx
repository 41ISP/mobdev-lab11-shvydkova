import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Works from "../pages/Works/Works";
import Description from "../pages/Descriptions/Descriptions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "books/:id",
                element: <Works />
            },
            {
                index: true,
                element: <Description />
            }
        ]
    },
])
export default router