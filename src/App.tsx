import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchRepositories from './redux-assets/action-creators/searchRepositories';

function App() {
  const dispatch = useDispatch()
  const [keyWord, setKeyWord] = useState("")

  const repositories = useSelector((state: any) => state.repositories)

  console.log("repositories: ", repositories)
  const onSearchConfirm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(searchRepositories(keyWord))
  }
  return (
    <div className='container'>
      <h2> Search for Package </h2>
      <div className='row align-items-end mt-5'>
        <div className='col-md-4 col-xs-12'>
          <div>
            <label className='mb-1'>Keyword search</label>
            <input
              className="form-control"
              placeholder="Search about npm package"
              value={keyWord}
              onChange={(e) => setKeyWord(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-4 col-xs-12'>
          <button
            className='special-button'
            onClick={onSearchConfirm}
          > Search </button>
        </div>
      </div>
    </div>
  );
}

export default App;
