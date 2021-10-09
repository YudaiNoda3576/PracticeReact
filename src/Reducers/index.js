// 全Reducerを結合するファイル
import { combineReducers } from "redux"
import events from "./events"

//複数のReducerをコンマ繋ぎで定義できる
export default combineReducers({events})