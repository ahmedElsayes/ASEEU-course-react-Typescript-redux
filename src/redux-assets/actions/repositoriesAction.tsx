import ActionType from "../action-types";

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
type repositoriesAction = SearchRepositoriesRequest | SearchRepositoriesError | SearchRepositoriesSuccess

export default repositoriesAction