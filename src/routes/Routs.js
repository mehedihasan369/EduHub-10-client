import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import Blogs from "../pages/Blogs/Blogs";
// import Category from "../pages/category/Category";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import PremiumCourse from "../pages/premiumCourse/PremiumCourse";
import SignUp from "../pages/SignUp/SignUp";
import TermsAndConditions from "../pages/TermsAndConditons";
import PrivateRoute from "./PrivateRouts/PrivateRoute";

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
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                  },
                element : <CourseDetails></CourseDetails>
            },
            {
                path : '/courses',
                loader: async () => {
                    return fetch(`http://localhost:5000/categories`)
                  },
                element : <Courses></Courses>
            },
            {
                path : '/premiumCourse/:id',
               
                element : <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>
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
            },
            {
                path : '/terms',
                element : <TermsAndConditions></TermsAndConditions>
            }
        ]
    },
    { path: '*', element: <MyError></MyError> }
])