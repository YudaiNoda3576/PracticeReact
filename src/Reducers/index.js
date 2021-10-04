// 全Reducerを結合するファイル
import { combineReducers } from "redux"
import count from "./count.js"

export default combineReducers({count})