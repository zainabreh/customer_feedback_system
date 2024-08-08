import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import Product from './pages/Product'
import ReviewForm from './pages/ReviewForm'
import SubmitFormResult from './pages/SubmitFormResult'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        {/* <Route index element={<Product/>} /> */}
        {/* <Route index  element={<ReviewForm/>} /> */}
        <Route index  element={<SubmitFormResult/>} />
        {/* <Route path='/review' element={<ReviewForm/>} /> */}
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
