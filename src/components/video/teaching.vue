<template>
  <div>
    <videoStatic>
      <el-row>
        <el-col>
          <li v-for="(item, index) in teaching_video" :key="index">
            <a :href="item.url" target="_block">
              <img :src="item.img" alt="IDskin封面" />
              {{item.title}}
            </a>
          </li>
        </el-col>
      </el-row>
    </videoStatic>
  </div>
</template>
<script>
import { mapState ,mapGetters } from "vuex";
import videoStatic from "../../pages/videoStatic/videoStatic";
export default {
  data() {
    return {};
  },
  components: {
    videoStatic
  },
  // created() {
  //   var allVideo = [];
  //   allVideo = this.allVideoTest.filter(item => item.type === "zhaoshangVideo");
  //   // console.log(allVideo);
  //   return allVideo;
  // },
  computed: {
    ...mapGetters(["teaching_video"]),

    // zhaoshangVideoArr() {
    //   const { allVideoTest } = this;
    //   const arr = [];
    //   allVideoTest.forEach(item => {
    //     if (item.type === "teaching") {
    //       arr.push(item);
    //     }
    //     // console.log(arr)
    //   });
    //   return arr;
    // }
  }
};
</script>
<style scope>
</style>