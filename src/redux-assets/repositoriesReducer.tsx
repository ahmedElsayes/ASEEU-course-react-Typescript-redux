interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]
}

enum ActionType {
  SEARCH_REPOSITORIES_REQUEST = "SEARCH_REPOSITORIES_REQUEST",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR"
}

interface SearchRepositoriesRequest {
  type: ActionType.SEARCH_REPOSITORIES_REQUEST
}
interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload: string[]
}
interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR,
  payload: string
}
type Action = SearchRepositoriesRequest | SearchRepositoriesError | SearchRepositoriesSuccess

const reducer = (
  state: RepositoriesState,
  action: Action
  ): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES_REQUEST:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer