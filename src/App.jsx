
import { Container } from '@chakra-ui/react'
import { Toaster } from "@/components/ui/toaster"
import './App.css'
import NavBar from './components/ui/navbar'
import HomePage from './components/ui/HomePage'
import AddArticlePage from './components/ui/AddArticlePage'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-article" element={<AddArticlePage />} />
          <Route path="*" element={<h1>404 – Not Found</h1>} />
        </Routes>
        <Toaster />
      </Container>
    </>
  )
}

export default App
