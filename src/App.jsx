import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
// Pages
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import PostsPage from "./components/PostsPage"

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App