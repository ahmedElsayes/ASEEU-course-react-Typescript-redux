import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import repositoriesReducer from "./reducers/repositoriesReducer";


const allReducers = combineReducers({
  repositories: repositoriesReducer
})

// to define types that comes out of useSelector
type RootState = ReturnType <typeof allReducers>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store