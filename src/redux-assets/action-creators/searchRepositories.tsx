import axios from "axios"
import { Dispatch } from "redux"
import ActionType from "../action-types"
import repositoriesAction from "../actions/repositoriesAction"


const searchRepositories = (keyWord: string) => async (dispatch: Dispatch<repositoriesAction>) => {
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES_REQUEST
  })

  try {
    // fetch data from npm package
    // https://registry.npmjs.org/-/v1/search?text=React
    const { data }: any = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${keyWord}`)

    const names = data.objects.map((object: any) => object.package.name)
    console.log("names: ", names)
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names
    })

  } catch (err: any) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message
    })
  }
}

export default searchRepositories