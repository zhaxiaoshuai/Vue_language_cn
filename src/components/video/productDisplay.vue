<template>
  <div>
    <videoStatic>
          <li v-for="(item, index) in productDisplay" :key="index">
            <a :href="item.url" target="_block">
              <img :src="item.img" alt="IDskin封面" />
              {{item.title}}
            </a>
          </li>
    </videoStatic>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import videoStatic from "../../pages/videoStatic/videoStatic";
  export default {
    name: "productDisplay",
    components:{
      videoStatic
    },
    computed:{
      ...mapGetters(['productDisplay'])
    }
  }
</script>

<style scoped>

</style>
