interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]
}
const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case "SEARCH_REPOSITORIES_REQUEST":
      return { loading: true, error: null, data: [] }
    case "SEARCH_REPOSITORIES_SUCCESS":
      return { loading: false, error: null, data: action.payload }
    case "SEARCH_REPOSITORIES_Error":
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer