import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
      </Routes>

    </Router>
    
  )
}

export default App