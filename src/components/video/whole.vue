<template>
  <div>
    <videoStatic>
      <li v-for="(item, index) in allVideoTest" :key="index">
        <a :href="item.url" target="_block">
          <img :src="item.img" alt="IDskin封面" />
          {{item.title}}
        </a>
      </li>
    </videoStatic>
  </div>
</template>

<script>
import videoStatic from "../../pages/videoStatic/videoStatic";
import { mapState } from "vuex";
export default {
  components: {
    videoStatic
  },
  computed: {
    ...mapState(["allVideoTest"])
  }
};
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
</style>