import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createContext } from 'react';
export const modalStore = createContext(null);


import './index.css'
import { router } from './routers/mainRouter'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
