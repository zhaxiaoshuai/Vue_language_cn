export default {
  // 教学视频
  teaching_video(state) {
        return state.allVideo.filter(item => {
            return item.type === 'teaching'
        })
    },
}
