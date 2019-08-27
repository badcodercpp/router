
import { HOME_ACTION} from '../actionTypes/home';
export const HOME_ACTION_CREATOR=(payload)=>{
    return {
        type:HOME_ACTION,
        payload
    }
}