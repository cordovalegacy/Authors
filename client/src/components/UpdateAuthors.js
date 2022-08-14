import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const UpdateAuthors = (props) => {

    const {id} = useParams();

    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            setAuthor(res.data.author);
        })
        .catch((err) => console.log(err.res))
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, {
            author,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div>
            <br/>
            <header>Not Your Favorite Writer? Change It!</header>
            <form id='author-update-form' onSubmit={submitHandler}>
                <Link to='/'>Home</Link>
                <p id='update-label'>
                    <label>Author: </label>
                    <br/>
                    <input type='text' value={author} onChange = {(e) => setAuthor(e.target.value)} />
                    {errors.author ? <p id='red-update'>{errors.author.message}</p> : null}
                </p>
                <input type='submit' value='Update' />
            </form>
        </div>
    );
};

export default UpdateAuthors;