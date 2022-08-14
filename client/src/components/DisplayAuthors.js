import { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const DisplayAuthors = (props) => {

    const {authorList, setAuthorList} = props;

    const navigate = useNavigate();

    console.log(authorList);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        console.log('====idFromBelow', idFromBelow)
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            setAuthorList(authorList.filter((writer, index) => writer._id !== idFromBelow));
        })
        .catch((err) => console.log(err))
    };

    return (
        <div>
            <br/>
            <header>
                Author Database
            </header>
            <h2>
                Choose Your Favorite Below!
            </h2>
            <Link to={'/authors/new'}>Add an Author</Link>
            <p>We have quotes by:</p>
            <div id='author-table'>
                <table id='table'>
                <thead>
                    <tr id='author-headers'>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody id='author-body'>
            {
                authorList.map((writer, index) => (
                    <div key = {index}>
                            <tr id="author-layout">
                                <div id="spread-1">
                                <td id="author-content-1">
                                    <Link to={`/authors/${writer._id}`}>{writer.author}</Link>
                                </td>
                                </div>
                                <div id="spread-2">
                                <td id="author-content-2">
                                    <button onClick={() => navigate(`/authors/edit/${writer._id}`)}>Edit</button>
                                    <button onClick={()=> deleteFilter(writer._id)}>Delete</button>
                                </td>
                                </div>
                            </tr>
                    </div>
                ))
            }
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default DisplayAuthors;