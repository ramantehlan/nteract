import {combineReducers} from "redux"
import * as actions from "./actions"


export const updateString = (actionName = "", defaultState = "") => {
  return (state = defaultState, action) => {
    switch (action.type){
      case `UPDATE_${actionName}`:
        return action.value
      default:
        return state
    }
  }
}

export const updateBool = (actionName = "", defaultState = false) => {
  return (state = defaultState, action) => {
    switch (action.type){
      case `UPDATE_${actionName}`:
        return action.value
      default:
        return state
    }
  }
}

export const toggleBool = (actionName = "", defaultState = false) => {
  return (state = defaultState, action) => {
    switch (action.type){
      case `TOGGLE_${actionName}`:
        return !state
      default:
        return state
    }
  }
}

const globalReducer = combineReducers({
    showBinderMenu: toggleBool(actions.BINDER_MENU),
    showConsole: toggleBool(actions.CONSOLE),
    showSaveDialog: toggleBool(actions.SAVE_DIALOG),
    filePath: updateString(actions.FILE_PATH),
    fileContent: updateString(actions.FILE_CONTENT),
    provider: updateString(actions.PROVIDER),
    org: updateString(actions.ORG),
    repo: updateString(actions.REPO),
    gitRef: updateString(actions.GIT_REF),
    lang: updateString(actions.LANG),
    commitMessage: updateString(actions.COMMIT_MESSAGE),
    stripOutput: updateString(actions.STRIP_OUTPUT),
    fileBuffer: updateString(actions.FILE_BUFFER),
    savedTime: updateString(actions.SAVED_TIME),
    consolelog: updateString(actions.CONSOLE_LOG),
    notificationlog: updateString(actions.NOTIFICATION_LOG),
    serverStatus: updateString(actions.SERVER_STATUS),
    host: updateString(actions.HOST),
    loggedIn: updateBool(actions.LOGGED_IN),
    username: updateString(actions.USERNAME),
    userImage: updateString(actions.USER_IMAGE),
    userLink: updateString(actions.USER_LINK),
})

export default globalReducer
