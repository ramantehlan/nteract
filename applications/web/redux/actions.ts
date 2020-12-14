//
// Action Types
//
export const BINDER_MENU = "TOGGLE_BINDER_MENU"
export const CONSOLE = "TOGGLE_CONSOLE" 
export const SAVE_DIALOG = "TOGGLE_SAVE_DIALOG" 

export const FILE_PATH = "UPDATE_FILE_PATH"
export const FILE_CONTENT = "UPDATE_FILE_PATH"
export const PROVIDER = "UPDATE_PROVIDER"
export const ORG = "UPDATE_ORG"
export const REPO = "UPDATE_REPO"
export const GIT_REF = "UPDATE_GIT_REF"

export const LANG = "UPDATE_LANG"

export const COMMIT_MESSAGE = "UPDATE_COMMIT_MESSAGE"

export const STRIP_OUTPUT = "TOGGLE_STRIP_OUTPUT"
export const FILE_BUFFER = "UPDATE_FILE_BUFFER"
export const SAVED_TIME = "UPDATE_SAVED_TIME"

export const CONSOLE_LOG = "UPDATE_CONSOLE_LOG"
export const NOTIFICATION_LOG = "UPDATE_NOTIFICATION_LOG"

export const SERVER_STATUS = "UPDATE_SERVER_STATUS"
export const HOST = "UPDATE_HOST"

export const LOGGED_IN = "UPDATE_LOGGED_IN"
export const USERNAME = "UPDATE_USERNAME"
export const USER_IMAGE = "UPDATE_IMAGE"
export const USER_LINK = "UPDATE_LINK"
//
// ACTION CREATOR
//

export const toggleStripOutput = (text: string) => ({
  type: STRIP_OUTPUT,
  value: text
})

export const setCommitMessage = (text: string) => ({
  type: COMMIT_MESSAGE,
  value: text
})

export const toggleBinderMenu = () => ({
  type: BINDER_MENU
})

export const toggleConsole = () => ({
  type: CONSOLE
})

export const toggleSaveDialog = () => ({
  type: SAVE_DIALOG 
})

export const setFilePath = (text: string) => ({
  type: FILE_PATH,
  value: text
})

export const setFileContent = (text: string) => ({
  type: FILE_CONTENT,
  value: text
})

export const setProvider = (text: string) => ({
  type: PROVIDER,
  value: text
})

export const setORG = (text: string) => ({
  type: ORG,
  value: text
})

export const setRepo = (text: string) => ({
  type: REPO,
  value: text
})

export const setGitRef = (text: string) => ({
  type: GIT_REF,
  value: text
})

export const setLang = (text: string) => ({
  type: LANG,
  value: text
})

