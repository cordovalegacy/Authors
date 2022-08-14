import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateAuthors = (props) => {

    const {authorList, setAuthorList} = props;

    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();

        const writer = {
            author,
        }

        console.log('===writer', writer)
        axios.post("http://localhost:8000/api/authors", writer)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList([...authorList, res.data]);
                setAuthor('');
                navigate('/');
            })
            .catch((err)=> { 
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
                });
    }

    return (
        <div>
            <header>
                Favorite Authors!
            </header>
            <Link to='/'>Home</Link>
                <form id='create-update-form' onSubmit={submitHandler}>
                    <p id='create-label'>
                        <label>Author: </label><br/>
                        <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
                        {errors.author ? <p id='red-create'>{errors.author.message}</p> : null}
                    </p>
                    <input type='submit' value='create' />
                </form>
        </div>
    );
};
export default CreateAuthors;