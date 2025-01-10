import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
// Pages
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostsPage from "./pages/posts/PostsPage"
import CreatePostPage from "./pages/posts/CreatePostPage"
import SinglePostPage from "./pages/posts/SinglePostPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts">
            <Route index element={<PostsPage />} />
            <Route path="create" element={<CreatePostPage />} />
            <Route path=":id" element={<SinglePostPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App