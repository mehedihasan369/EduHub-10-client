import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import Blogs from "../pages/Blogs/Blogs";
import Category from "../pages/category/Category";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/category/:id',
                element : <CourseDetails></CourseDetails>
            },
            {
                path : '/courses',
                element : <Courses></Courses>
            },
            
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
            {
                path : '/FAQ',
                element : <FAQ></FAQ>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            }
        ]
    },
    { path: '*', element: <MyError></MyError> }
])