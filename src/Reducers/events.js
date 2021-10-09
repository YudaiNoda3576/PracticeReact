import _ from 'lodash'
import {READ_EVENTS} from "../Actions/"


// eslint-disable-next-line import/no-anonymous-default-export
export default(state = {}, action) => {
    switch(action.type){
        case READ_EVENTS: 
         // オブジェクトのキーを変更する。オブジェクト を返す。
            return _.mapKeys(action.response.data, 'id');
        default:
            return state;
    }
}