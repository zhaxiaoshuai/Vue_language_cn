import {
    RECEIVE_VIDEOLIST
} from './mutation-types'
export default {
    [RECEIVE_VIDEOLIST] (state,{allVideo}){
        state.allVideo = allVideo
    }
}