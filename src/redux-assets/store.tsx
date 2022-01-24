import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import repositoriesReducer from "./reducers/repositoriesReducer";


const allReducers = combineReducers({
  repositories: repositoriesReducer
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store