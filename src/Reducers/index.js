// 全Reducerを結合するファイル
import { combineReducers } from "redux"
import events from "./events"
import { reducer as form } from 'redux-form'

//複数のReducerをコンマ繋ぎで定義できる
export default combineReducers({events, form})