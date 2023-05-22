import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Header} from "./components/common/Header";
import {Table} from "./components/common/Table";
import {Layout} from "./Layout";
import {Page} from "./pages/Page";
import {HomePage} from "./pages/HomePage";

function App() {

    const router = createBrowserRouter([
        {   element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                    ,
                },
        {
            path: "/subjects",
            element :
            <>
                <Page type={'subjects'} />
            </>
                ,
        }
    ,
        {
            path: "/chairs",
            element :
                <Page type={'chairs'} />
                ,
        }
    ,
        {
            path: "/teachers",
                element :
            <>
                <Page type={'teachers'} />
            </>,
        },
        {
            path: "/speciality",
                element :
            <>
                <Page type={'speciality'} />
            </>,
        }
    ,
]
}]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
