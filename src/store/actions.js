import {
    RECEIVE_VIDEOLIST
  } from './mutation-types'
  import {
    reqVideoList
  } from  '../api'
  export  default {
    async getVideoList ({commit},callback){
        const result = await reqVideoList()
        if(result.code === 0){
            const allVideo = result.data
            commit(RECEIVE_VIDEOLIST,{allVideo})
            callback && callback()
        }


    }
  }


  
  