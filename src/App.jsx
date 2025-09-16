
import { Container } from '@chakra-ui/react'
import { Toaster } from "@/components/ui/toaster"
import './App.css'
import NavBar from './components/ui/navbar'
import { useState } from 'react'
import HomePage from './components/ui/HomePage'
import AddArticlePage from './components/ui/AddArticlePage'

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <NavBar setPage={setPage} />
      <Container>
        {page === "Home" && <HomePage />}
        {page === "AddArticle" && <AddArticlePage />}
        <Toaster />
      </Container>
    </>
  )
}

export default App
