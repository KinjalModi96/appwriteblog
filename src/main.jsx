import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'
import Home from './pages/Home.jsx'


import AddPost from './pages/Addpost'
import Signup from './pages/Signup'
import EditPost from './pages/Editpost'

import Post from './pages/post'

import AllPosts from './pages/Allpost'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                    <Login />
            ),
        },
        {
            path: "/signup",
            element: (
                    <Signup />
            ),
        },
        {
            path: "/all-posts",
            element: (
                    <AllPosts />
            ),
        },
        {
            path: "/add-post",
            element: (
                    <AddPost />
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                    <EditPost />
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)