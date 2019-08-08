<template>
  <div>
    <videoStatic>
      <li v-for="(item, index) in allVideo" :key="index">
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
  methods: {},
  computed: {
    ...mapState(["allVideo"])
  }
};
</script>