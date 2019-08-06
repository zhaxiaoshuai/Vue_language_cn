export default {
    teaching_video(state){
        return state.allVideo.filter(item =>{
            return item.type === 'teaching'
        })
    }
}