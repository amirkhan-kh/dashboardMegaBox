import {createBrowserRouter} from "react-router-dom";
import { Dashboard, Login } from '@layout'
import {Brands, Category, Home, Product, Error, SubCategoriy, Valyuta, PostItem, Leads} from '@pages'
import App from '../../src/App'

const children = [
  {
    path: "/",
    element: <Dashboard/>,
    children: [ 
      {path: "/", element: <Home/>},
      {path: "/category", element: <Category/>},
      {path: "/category/:id", element: <PostItem/>},
      {path: "/leads", element: <Leads/>},
      {path: "/subCategory", element: <SubCategoriy/>},
      {path: "/subCategory/:id", element: <PostItem/>},
      {path: "/brands", element: <Brands/>},
      {path: "/brands/:id", element: <PostItem/>},
      {path: "/product", element: <Product/>},
      {path: "/product/:id", element: <PostItem/>},
      {path: "/valyuta", element: <Valyuta/>},
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <Error/>
  }
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [...children]
  }
])
