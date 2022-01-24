import React from 'react';

function App() {
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
            />
          </div>
        </div>
        <div className='col-md-4 col-xs-12'>
          <button className='special-button'> Search </button>
        </div>
      </div>
    </div>
  );
}

export default App;
