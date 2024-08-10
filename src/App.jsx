import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout'
import Product from './pages/Product'
import ReviewForm from './pages/ReviewForm'
import SubmitFormResult from './pages/SubmitFormResult'
import ReviewTable from './pages/ReviewTable'
import ReviewDetail from './pages/ReviewDetail'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Product/>} />
        <Route path='/reviewForm/:id'  element={<ReviewForm/>} />
        <Route path='/submittedForm'  element={<SubmitFormResult/>} />
        <Route path='/reviewTable' element={<ReviewTable/>}/>
        <Route path='/reviewDetail/:id' element={<ReviewDetail/>}/>
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
