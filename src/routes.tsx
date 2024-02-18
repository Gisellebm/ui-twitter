import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";

// localhost:5173/

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Timeline />
    },
    {
        path: "/tweet",
        element: <h1>Tweet</h1>
    }
])