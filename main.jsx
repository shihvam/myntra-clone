import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import {createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import {Provider} from 'react-redux';
import myntraStore from './store/index.js'


const router = createBrowserRouter([ 
  {
  path:'/' , element: <App/>, 

  children : [
    {path: '/', element: <Home  />  },
    {path:'/bag', element: <Bag/>},
  ]
  } 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore} >
    <RouterProvider router = {router}/>

    </Provider>
   </StrictMode>
)
