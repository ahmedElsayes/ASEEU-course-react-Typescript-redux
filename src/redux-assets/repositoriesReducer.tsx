interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]
}
// interface Action {
//   type: string;
//   payload: any;
// }
interface SearchRepositoriesRequest {
  type: "SEARCH_REPOSITORIES_REQUEST"
}
interface SearchRepositoriesSuccess {
  type: "SEARCH_REPOSITORIES_SUCCESS",
  payload: string[]
}
interface SearchRepositoriesError {
  type: "SEARCH_REPOSITORIES_ERROR",
  payload: string
}
const reducer = (
  state: RepositoriesState,
  action: SearchRepositoriesRequest | SearchRepositoriesError | SearchRepositoriesSuccess
  ): RepositoriesState => {
  switch (action.type) {
    case "SEARCH_REPOSITORIES_REQUEST":
      return { loading: true, error: null, data: [] }
    case "SEARCH_REPOSITORIES_SUCCESS":
      return { loading: false, error: null, data: action.payload }
    case "SEARCH_REPOSITORIES_ERROR":
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer