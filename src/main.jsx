import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import { ToastContainer} from 'react-toastify';
import ReadingPage from './Components/ReadingPage/ReadingPage.jsx';

const router = createBrowserRouter([
  {
   path:"/",
   element:<Root></Root>,
   children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/books/:bookId",
      element:<BookDetails></BookDetails>,
      loader: () => fetch('/booksData.json')
    },
    {
      path:"/listedBooks",
      element:<ListedBooks></ListedBooks>,
      loader: () => fetch('/booksData.json')
    },
    {
      path:"/readingPages",
      element:<ReadingPage></ReadingPage>,
      loader: () => fetch('/booksData.json')
    },
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
