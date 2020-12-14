import {combineReducers} from "redux"
import * as actions from "./actions"


export const updateString = (actionName = "") => {
  return (state = "", action) => {
    switch (action.type){
      case `UPDATE_${actionName}`:
        return action.value
      default:
        return state
    }
  }
}

export const toggleBinderMenuReducer = (state = false, action) => {
  switch(action.type) {
    case actions.BINDER_MENU:
      return !state
    default:
      return state
  }
}

export const toggleConsoleReducer = (state = false, action) => {
  switch(action.type) {
    case actions.CONSOLE:
      return !state
    default:
      return state
  }
}

export const toggleSaveDialogReducer = (state = false, action) => {
  switch(action.type) {
    case actions.SAVE_DIALOG:
      return !state
    default:
      return state
  }
}


const globalReducer = combineReducers({
    showBinderMenu: toggleBinderMenuReducer,
    showConsole: toggleConsoleReducer,
    showSaveDialog: toggleSaveDialogReducer,
    filePath: updateString(actions.FILE_PATH),
    fileContent: updateString(actions.FILE_CONTENT),
    provider: updateString(actions.PROVIDER),
    org: updateString(actions.ORG),
    repo: updateString(actions.REPO),
    gitRef: updateString(actions.GIT_REF),
    lang: updateString(actions.LANG)
})

export default globalReducer
