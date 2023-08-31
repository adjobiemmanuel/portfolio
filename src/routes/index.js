import App from '../App'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Projet from '../pages/Projet'

import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "",
          element: <Projet />,
        },
        {
          path: "contacts",
          element: <Contact />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ]
    },
    
   
   
  ]);

  export default router