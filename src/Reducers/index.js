// 全Reducerを結合するファイル
import { combineReducers } from "redux"
import count from "./count"

//複数のReducerをコンマ繋ぎで定義できる
export default combineReducers({count})