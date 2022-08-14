import { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const IdentifyAuthor = (props) => {

    const {id} = useParams();

    const [oneAuthor, setOneAuthor] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneAuthor(res.data);
        })
        .catch((err) => {
            console.log(err);
    });
}, []);

const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
    .then((res) => {
        console.log(res.data);
        navigate('/');
    })
    .catch((err) => console.log(err))
};

    return(
        <div>
            <h2>{oneAuthor.author}</h2>
            <button onClick={deleteHandler}>Delete</button>
            <Link to={'/'}>Go Home</Link>
        </div>
    );
};

export default IdentifyAuthor;