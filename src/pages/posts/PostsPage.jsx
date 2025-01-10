import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// Components
import AppCard from '../../components/AppCard';

// API Url
const apiUrl = import.meta.env.VITE_API_URL;

function PostsPage() {
    // VARIABILI DI STATO
    // Lista Post
    const [postsList, setPostsList] = useState([]);
    // Tags
    const [tagsList, setTagsList] = useState([])
    // Filter 
    const [filter, setFilter] = useState("all");

    // USE EFFECTS
    // Show Posts
    useEffect(() => getPosts(), [filter])
    // Show Tags
    useEffect(() => getTags(), [])

    // FUNCTIONS
    // Get Posts
    const getPosts = () => {
        let url = `${apiUrl}/posts`

        if (filter !== "all") {
            url += `?tag=${filter}`;
        }

        axios.get(url).then((resp) => {
            setPostsList(resp.data)
        })
    }

    // Get Tags
    const getTags = () => {
        axios.get(`${apiUrl}/tags`).then((resp) => {
            setTagsList(resp.data.tags)
        })
    }

    // Delete Function
    const handleDelete = (idToDelete) => {
        axios.delete(`${apiUrl}/posts/${idToDelete}`).then((resp) => {
            const filteredList = postsList.filter(curArticle => curArticle.id !== idToDelete)
            setPostsList(filteredList);
        })
    }

    return (
        <>
            {/* Header */}
            <header>
                <h1 className='text-center pt-4 my-title'>RECIPES</h1>
            </header>
            {/* Main */}
            <main className='container'>
                {/* Posts */}
                <section className='mt-5' >
                    <div className='d-flex justify-content-between mb-4'>
                        <select onChange={(event) => setFilter(event.target.value)} value={filter} name="filter" id="filter" className='form-select w-25'>
                            <option value="all">All Posts</option>
                            {tagsList.map((curTag, index) => <option key={index} value={curTag}>{curTag}</option>)}
                        </select>
                        <div className='d-flex'>
                        <Link className='btn my-btn' to="/posts/create">Add Recipe</Link>
                        </div>
                    </div>
                    <div className="row">
                        {postsList.length !== 0 ? postsList.map((curPost, index) =>
                            <div key={index} className="col-4 mb-3">
                                <AppCard
                                    url={apiUrl}
                                    post={curPost}
                                    deleteHandler={handleDelete}
                                />
                            </div>) : <p>Nessun Post Disponibile</p>}
                    </div>
                </section >
            </main>
        </>
    )
}

export default PostsPage