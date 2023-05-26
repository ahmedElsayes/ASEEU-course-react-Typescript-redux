import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { dataSelector, searchRepositories } from "./redux/repositoriesSlice";

function App() {
  const dispatch = useAppDispatch();
  const [keyWord, setKeyWord] = useState("");

  const data = useAppSelector(dataSelector);
  const { loading, error } = useAppSelector((state: RootState) => state.repos);

  const onSearchConfirm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(searchRepositories(keyWord));
  };

  return (
    <div className="container">
      <h2> Search for Package </h2>
      <div className="row align-items-end mt-5">
        <div className="col-md-4 col-xs-12">
          <div>
            <label className="mb-1">Keyword search</label>
            <input
              className="form-control"
              placeholder="Search about npm package"
              value={keyWord}
              onChange={(e) => setKeyWord(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4 col-xs-12">
          <button className="special-button" onClick={onSearchConfirm}>
            Search
          </button>
        </div>
      </div>
      <div>
        {error && { error }}
        {loading && <h3>Loading......</h3>}
        {!error &&
          !loading &&
          data.map((name: string, indx: number) => {
            return <p key={indx}> {name} </p>;
          })}
      </div>
    </div>
  );
}

export default App;
