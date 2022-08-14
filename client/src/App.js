import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CreateAuthors from './components/CreateAuthors';
import UpdateAuthors from './components/UpdateAuthors';
import IdentifyAuthor from './components/IdentifyAuthor';
import Main from './view/Main';

function App() {

  const [authorList, setAuthorList] = useState([]);

  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/authors/new' element={<CreateAuthors authorList = {authorList} setAuthorList = {setAuthorList} />} />
          <Route path='/authors/:id' element={<IdentifyAuthor />} />
          <Route path='/authors/edit/:id' element={<UpdateAuthors />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
