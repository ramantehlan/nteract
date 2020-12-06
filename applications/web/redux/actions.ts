//
// Action Types
//
export const TOGGLE_BINDER_MENU = "TOGGLE_BINDER_MENU"
export const TOGGLE_CONSOLE = "TOGGLE_CONSOLE" 
export const TOGGLE_SAVE_DIALOG = "TOGGLE_SAVE_DIALOG" 

export const FILE_PATH = "FILE_PATH"
export const FILE_CONTENT = "FILE_PATH"

export const PROVIDER = "PROVIDER"
export const ORG = "ORG"
export const REPO = "REPO"
export const GIT_REF = "GIT_REF"
export const LANG = "LANG"

//
// ACTION CREATOR
//
export const toggleBinderMenu = () => ({
  type: TOGGLE_BINDER_MENU
})

export const toggleConsole = () => ({
  type: TOGGLE_CONSOLE
})

export const toggleSaveDialog = () => ({
  type: TOGGLE_SAVE_DIALOG
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

