import DisplayAuthors from '../components/DisplayAuthors';
import { useState } from 'react';

const Main = (props) => {

    const [authorList, setAuthorList] = useState([]);

    return (
        <div>
            <DisplayAuthors authorList = {authorList} setAuthorList = {setAuthorList} />
        </div>
    )
}

export default Main;