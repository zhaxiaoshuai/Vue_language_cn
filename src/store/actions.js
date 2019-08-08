import {
    RECEIVE_VIDEOLIST
} from './mutation-types'
import {
    reqVideoList
} from '../api'
export default {
    // 获取全部视频
    async getVideoList({ commit }) {
        const result = await reqVideoList()
        if (result.code === 0) {
            const allVideo = result.data
            commit(RECEIVE_VIDEOLIST, { allVideo })
        }
    }
}



