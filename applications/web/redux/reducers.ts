import {combineReducers} from "redux"
import * as actions from "./actions"


export const toggleBinderMenuReducer = (state = false, action) => {
  switch(action.type) {
    case actions.TOGGLE_BINDER_MENU:
      return !state
    default:
      return state
  }
}

export const toggleConsoleReducer = (state = false, action) => {
  switch(action.type) {
    case actions.TOGGLE_CONSOLE:
      return !state
    default:
      return state
  }
}

export const toggleSaveDialogReducer = (state = false, action) => {
  switch(action.type) {
    case actions.TOGGLE_SAVE_DIALOG:
      return !state
    default:
      return state
  }
}

export const filePathReducer = (state = "", action) => {
  switch(action.type) {
    case actions.FILE_PATH:
      return action.value
    default:
        return state
  }
}

export const fileContentReducer = (state = "", action) => {
  switch(action.type) {
    case actions.FILE_CONTENT:
      return action.value
    default:
        return state
  }
}

export const providerReducer = (state = "", action) => {
  switch(action.type) {
    case actions.PROVIDER:
      return action.value
    default:
        return state
  }
}

export const orgReducer = (state = "", action) => {
  switch(action.type) {
    case actions.ORG:
      return action.value
    default:
        return state
  }
}

export const repoReducer = (state = "", action) => {
  switch(action.type) {
    case actions.REPO:
      return action.value
    default:
        return state
  }
}

export const gitRefReducer = (state = "", action) => {
  switch(action.type) {
    case actions.GIT_REF:
      return action.value
    default:
        return state
  }
}

export const langReducer = (state = "", action) => {
  switch(action.type) {
    case actions.LANG:
      return action.value
    default:
        return state
  }
}

const globalReducer = combineReducers({
    showBinderMenu: toggleBinderMenuReducer,
    showConsole: toggleConsoleReducer,
    showSaveDialog: toggleSaveDialogReducer,
    filePath: filePathReducer,
    fileContent: fileContentReducer,
    provider: providerReducer,
    org: orgReducer,
    repo: repoReducer,
    gitRef: gitRefReducer,
    lang: langReducer
})

export default globalReducer
