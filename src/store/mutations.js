import {
    RECEIVE_VIDEOLIST
} from './mutation-types'
export default {
    // 获取全部视频
    [RECEIVE_VIDEOLIST] (state,{allVideo}){
        state.allVideo = allVideo
    }
}
