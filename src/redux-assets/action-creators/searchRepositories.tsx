import ActionType from "../action-types"


const searchRepositories = (keyWord: string) => async (dispatch: any) => {
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES_REQUEST
  })

  try {
    // fetch data from npm package
    // https://registry.npmjs.org/-/v1/search?text=React
    const data: string[] = []

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: data
    })

  } catch (err: any) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message
    })
  }
}

export default searchRepositories