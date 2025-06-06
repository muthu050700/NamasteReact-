import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayOut = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        children: [
            { path: "/", element: <Body />, errorElement: <Error /> },
            { path: "/about", element: <About />, errorElement: <Error /> },
            { path: "/contact", element: <Contact />, errorElement: <Error /> },
            { path: "/resturant/:resId", element: <ResturantMenu />, errorElement: <Error /> },
            { path: "/grocery", element: <Grocery />, errorElement: <Error /> }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)