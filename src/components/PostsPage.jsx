import { useEffect, useState } from 'react'
import axios from 'axios';
// Components
import AppForm from './AppForm';
import AppCard from './AppCard';

// Valori di partenza Form
const initialFormData = {
    title: "",
    content: "",
    img: "",
    tags: []
};

// API Url
const apiUrl = import.meta.env.VITE_API_URL;

function PostsPage() {
    // VARIABILI DI STATO
    // Lista Post
    const [postsList, setPostsList] = useState([]);
    // Valori per form
    const [formData, setFormData] = useState(initialFormData);
    // Tags
    const [tagsList, setTagsList] = useState([])
    // Check Selezionati
    const [selectedChecks, setSelectedChecks] = useState([]);
    // Filter 
    const [filter, setFilter] = useState("all");
    // Form Display
    const [display, setDisplay] =useState("d-none");

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

    // Submit Handler Function
    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`${apiUrl}/posts`, formData).then((resp) => {
            const newPostsList = resp.data;
            setPostsList(newPostsList);
            setFormData(initialFormData)
        })
    }

    // Multiple Checkboxes Handler Function
    const handleMultipleCheckbox = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        const updatedChecks = isChecked ? [...selectedChecks, value] : selectedChecks.filter((curValue) => curValue !== value);
        setSelectedChecks(updatedChecks);

        setFormData({
            ...formData,
            tags: updatedChecks,
        });
    }

    // Input Change Handler Function
    const handleChange = (event) => {
        const keyToChange = event.target.name;
        const newValue = event.target.value;
        const newData = {
            ...formData,
            [keyToChange]: newValue
        }
        setFormData(newData)
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
                {/* Form */}
                <section className="pt-4">
                    {/* <h3>Add Post</h3> */}
                    <div className={display}>
                        <AppForm
                            submitHandler={handleSubmit}
                            data={formData}
                            inputChangeHandler={handleChange}
                            availableTags={tagsList}
                            selectedChecks={selectedChecks}
                            multipleCheckboxHandler={handleMultipleCheckbox}
                        />
                    </div>
                </section >

                {/* Posts */}
                <section className='mt-5' >
                    <div className='d-flex justify-content-between mb-4'>
                        <select onChange={(event) => setFilter(event.target.value)} value={filter} name="filter" id="filter" className='form-select w-25'>
                            <option value="all">All Posts</option>
                            {tagsList.map((curTag, index) => <option key={index} value={curTag}>{curTag}</option>)}
                        </select>
                        <div className='d-flex'>
                        <button onClick={() => {setDisplay("d-none")}} className={`btn my-btn-outline me-3 ${display}`}>Close</button>
                        <button onClick={() => {setDisplay("d-block")}} className='btn my-btn'>Add Recipe</button>
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